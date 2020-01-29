import firestore from '@react-native-firebase/firestore'
import {EventCategory} from "../../types/Event";

class Events {
  public getCategories(): Promise<EventCategory[]> {
    return new Promise<EventCategory[]>((resolve, reject) => {
      firestore().collection("categories").get().then((colSnap) => {
        const tempArr: EventCategory[] = []
        colSnap.forEach((docSnap) => {
          const {icon, items} = docSnap.data() || {icon: "", items: []}
          tempArr.push({
            title: docSnap.id,
            icon,
            items
          })
        })
        resolve(tempArr)
      }).catch((err) => reject(err))
    })
  }
}

export default new Events()
