import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'app3';

  ngOnInit(): void {

    var firebaseConfig = {
      apiKey: "AIzaSyC7PSU9Vg6MRXjlR0YRH5NXHleRirRWhZU",
      authDomain: "bennun-instagram-clone.firebaseapp.com",
      projectId: "bennun-instagram-clone",
      storageBucket: "bennun-instagram-clone.appspot.com",
      messagingSenderId: "746055138850",
      appId: "1:746055138850:web:a07386da1ca9156121547b",
      measurementId: "G-3CX77FB40K"
    };

    firebase.initializeApp(firebaseConfig)
  }
}
