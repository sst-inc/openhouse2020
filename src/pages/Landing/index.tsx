import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Button} from 'react-native-paper';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';
import LinearGradient from 'react-native-linear-gradient';
import Alert from '../../components/Alert'
import * as AppleAuthentication from 'expo-apple-authentication';
import {AppleAuthenticationScope} from 'expo-apple-authentication';
//@ts-ignore
import landingCode from '../../../assets/images/landing_code.png'
import {registerUserFirebase, userLogIn} from "../../functions/user";
import {NavigationInjectedProps} from "react-navigation";
import {Spinner} from "react-native-ui-kitten";
import {GOOGLE_WEB_API_KEY} from "../../../config";

interface LandingPageState {
  appleAuth: boolean;
  error: string;
  signInLoading: boolean
}

class LandingPage extends Component<NavigationInjectedProps, LandingPageState> {
  constructor(props: NavigationInjectedProps) {
    super(props);
    this.state = {
      appleAuth: false,
      error: "",
      signInLoading: false
    }
  }

  static navigationOptions = {
    header: null
  }

  componentDidMount(): void {
    GoogleSignin.configure({
      offlineAccess: true,
      webClientId: GOOGLE_WEB_API_KEY
    });
    AppleAuthentication.isAvailableAsync().then((appleAuth) => {
      this.setState({appleAuth})
    })
  }

  _appleSignIn() {
    this.setState({signInLoading: true}, () => {
      AppleAuthentication.signInAsync({requestedScopes: [AppleAuthenticationScope.EMAIL, AppleAuthenticationScope.FULL_NAME]}).then((data) => {
        const {identityToken} = data
        if (!identityToken) {
          return this.setState({error: "Could not complete login", signInLoading: false})
        }
        const appleCredential = auth.AppleAuthProvider.credential(identityToken, '');
        this._signInToFirebase(appleCredential).then(() => {
          userLogIn().then(() => {
            this._transition()
          })
        }).catch(() => {
          this.setState({error: "Could not complete login", signInLoading: false})
        })
      }).catch(() => {
        this.setState({error: "Could not complete login", signInLoading: false})
      })
    })
  }

  _signInToFirebase(credential: FirebaseAuthTypes.AuthCredential): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      auth().signInWithCredential(credential).then((userCredential) => {
        if (!userCredential) {
          return reject()
        }
        registerUserFirebase({
          email: userCredential.user.email || "",
          name: userCredential.user.displayName || ""
        }, userCredential.user.uid).then(() => {
          resolve()
        }).catch(() => {
          reject()
        })
      }).catch(() => {
        reject()
      })
    })
  }

  _googleSignIn() {
    this.setState({signInLoading: true}, () => {
      GoogleSignin.hasPlayServices().then(() => {
        GoogleSignin.signIn().then(() => {
          GoogleSignin.getTokens().then(({accessToken, idToken}) => {
            const credential = auth.GoogleAuthProvider.credential(idToken, accessToken);
            this._signInToFirebase(credential).then(() => {
              userLogIn().then(() => {
                this._transition()
              })
            }).catch(() => {
              this.setState({error: "Could not complete login", signInLoading: false})
            })
          }).catch(() => {
            this.setState({error: "Could not complete login", signInLoading: false})
          })
        }).catch((error) => {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            this.setState({error: "Login cancelled", signInLoading: false})
          } else if (error.code === statusCodes.IN_PROGRESS) {
            this.setState({error: "Login already in progress", signInLoading: false})
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            this.setState({error: "Play services is not available on this device", signInLoading: false})
          } else {
            this.setState({error: "An unknown error occurred", signInLoading: false})
          }
        })
      }).catch(() => {
        this.setState({error: "Play services is not available on this device", signInLoading: false})
      })

    })
  }

  _transition() {
    this.props.navigation.navigate("App")
  }

  render() {
    return (
      <View style={{
        backgroundColor: '#0055C8',
        flex: 1
      }}>
        <StatusBar barStyle={"light-content"} backgroundColor={"#2B32B2"}/>
        <Alert visible={!!this.state.error} onDismiss={() => {
        }} dialogActions={
          <Button onPress={() => this.setState({error: ""})}>Done</Button>
        } content={this.state.error}/>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{
          flex: 1,
        }}>
          <SafeAreaView style={{
            flex: 1,
          }}>
            <View style={{
              flex: 1,
              paddingLeft: 25
            }}>
              <Image source={landingCode} style={{
                resizeMode: 'contain',
                height: '100%',
                width: '100%'
              }}/>
            </View>
            <View style={{
              paddingLeft: 25,
              paddingRight: 25,
              justifyContent: 'center',
            }}>
              <Text style={{
                fontSize: 40,
                color: 'white',
                ...Platform.select({
                  ios: {
                    fontWeight: 'bold',
                    fontFamily: 'Raleway'
                  },
                  android: {
                    fontWeight: undefined,
                    fontFamily: 'Raleway 700'
                  },
                }),
              }}>
                Hey,
              </Text>
              <Text style={{
                fontSize: 30,
                color: 'white',
                ...Platform.select({
                  ios: {
                    fontWeight: 'bold',
                    fontFamily: 'Raleway'
                  },
                  android: {
                    fontWeight: undefined,
                    fontFamily: 'Raleway 700'
                  },
                }),
                opacity: 0.8,
                marginTop: 15,
              }}>{`ready to start\nyour SST journey?`}</Text>
              {this.state.signInLoading ? (
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 50
                }}>
                  <Spinner size={'giant'} status={'danger'}/>
                </View>
              ) : (
                <>
                  {this.state.appleAuth ? (
                    <AppleAuthentication.AppleAuthenticationButton
                      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
                      cornerRadius={2}
                      style={{
                        width: (Dimensions.get('window').width - 50) * 0.7 - 8,
                        height: 40,
                        marginTop: 30
                      }}
                      onPress={() => {
                        this._appleSignIn()
                      }}
                    />
                  ) : null}
                  <GoogleSigninButton onPress={() => this._googleSignIn()} style={{
                    ...Platform.select({
                      android: {
                        marginTop: 30,
                      },
                      ios: {
                        marginTop: 15,
                        marginLeft: -4
                      }
                    }),
                    width: '70%',
                  }} size={GoogleSigninButton.Size.Wide}/>
                  <SafeAreaView style={{
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    marginTop: 15,
                    marginBottom: 15
                  }}>
                    <TouchableOpacity onPress={() => {
                      userLogIn().then(() => {
                        this._transition()
                      })
                    }}>
                      <Text style={{
                        fontFamily: 'Raleway',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 15
                      }}>
                        skip
                      </Text>
                    </TouchableOpacity>
                  </SafeAreaView></>
              )}
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default LandingPage
