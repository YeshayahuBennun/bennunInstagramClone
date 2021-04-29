import { Injectable } from "@angular/core";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database'

@Injectable()
export class Bd {

    public post(publication: any) {
        
        let imageName = Date.now()

        console.log(publication)
        firebase.storage().ref().child(`images/${imageName}`)
        .put(publication.image)
        /* firebase.database().ref(`publications/${btoa(publication.email)}`)
        .push({title:publication.title}) */
        
    }
}