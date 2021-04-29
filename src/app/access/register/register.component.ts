import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Auth } from 'src/app/auth.service';
import { User } from '../user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() public showLoginPainelEmitter = new EventEmitter<string>()

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'fullName': new FormControl(null),
    'username': new FormControl(null),
    'password': new FormControl(null)
  })
  constructor(private auth:Auth) { }

  ngOnInit(): void {
  }

  public showLoginPainel() {
    this.showLoginPainelEmitter.emit('login')
  }

  public registerUser() {
    let user: User = new User(
      this.form.value.email,
      this.form.value.fullName,
      this.form.value.username,
      this.form.value.password
    )

     this.auth.registerUser(user)
     .then(()=>this.showLoginPainel())
  }

}
