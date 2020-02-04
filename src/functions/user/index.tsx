import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth'
import {GoogleSignin} from "@react-native-community/google-signin";
import {FirebaseUser} from "../../types/User";
import firestore from "@react-native-firebase/firestore";

export function registerUserFirebase(user: FirebaseUser, id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const emailArr = user.email.split("@")
        const isStudent = emailArr[emailArr.length - 1].includes("sst.edu.sg") || emailArr[emailArr.length - 1].includes("ssts.edu.sg")
        firestore().collection("users").doc(id).set({email: user.email, name: user.name, access: isStudent ? 2 : 1}).then(() => {
            resolve()
        }).catch(() => {
            reject()
        })
    })
}

export function checkUserLoggedIn(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
        AsyncStorage.getItem("userLoggedIn").then((item) => {
            resolve(item === "true")
        })
    })
}

export function userLogOut(): Promise<void> {
    return new Promise<void>((resolve) => {
        if (auth().currentUser !== null) {
            auth().signOut().then(() => {
                GoogleSignin.getCurrentUser().then((user) => {
                    if (user) {
                        GoogleSignin.signOut().then(() => {
                            AsyncStorage.setItem('userLoggedIn', 'false').then(() => {
                                resolve()
                            })
                        })
                    } else {
                        AsyncStorage.setItem('userLoggedIn', 'false').then(() => {
                            resolve()
                        })
                    }
                })
            })
            return
        }
        AsyncStorage.setItem('userLoggedIn', 'false').then(() => {
            resolve()
        })
    })
}

export function userLogIn(): Promise<void> {
    return new Promise<void>((resolve) => [
        AsyncStorage.setItem('userLoggedIn', 'true').then(() => {
            resolve()
        })
    ])
}
