import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bd } from 'src/app/bd.service';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database'

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.css']
})
export class PublicationEditComponent implements OnInit {

  public email: string
  public image: any

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null)
  })

  constructor(
    private bd: Bd
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  public post() {
    this.bd.post({
      email: this.email,
      title: this.form.value.title,
      image: this.image[0]

    })
  }

  public prepareImageUpload(event: Event) {
    this.image = (<HTMLInputElement>event.target).files

  }

}
