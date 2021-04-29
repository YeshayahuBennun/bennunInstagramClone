import { Injectable } from "@angular/core";
import { User } from "./access/user.model";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database'
import { Router } from "@angular/router";


@Injectable()
export class Auth {

    public token_id: string

    constructor(private router: Router) { }

    public registerUser(user: User): Promise<any> {
        console.log('Chegamos ate o servico', user)
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(() => {

                //remove the content of the field 'password'
                delete user.password

                //register complementar data in the path email of base64
                firebase.database().ref(`user_detail/${btoa(user.email)}`) //bta() criptograph atob descriptograph
                    .set(user)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    public authentication(email: string, password: string) {
        console.log('email: ', email)
        console.log('password: ', password)

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        this.token_id = idToken
                        localStorage.setItem('idToken', idToken)
                        this.router.navigate(['/home'])
                    })
            })
            .catch((error: Error) => console.log(error))
    }

    public isAuthenticated(): boolean {

        if (this.token_id === undefined && localStorage.getItem('idToken') != null) {
            this.token_id = localStorage.getItem('idToken')
        }

        if(this.token_id===undefined){
            this.router.navigate(['/'])
        }

        return this.token_id !== undefined
    }

    logout() {
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('idToken')
                localStorage.removeItem('firebase:host:bennun-instagram-clone-default-rtdb.firebaseio.com')
                this.token_id = undefined
                this.router.navigate(['/'])
            })
    }
}