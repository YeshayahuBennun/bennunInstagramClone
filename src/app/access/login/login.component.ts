import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Auth } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public showRegisterPainelEmitter = new EventEmitter<string>()

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null),
  })

  constructor(private auth:Auth) { }

  ngOnInit(): void {
  }

  public showRegisterPainel() {
    this.showRegisterPainelEmitter.emit('register')
  }

  public authentication(){
    this.auth.authentication(this.form.value.email,this.form.value.password)
  }
}
