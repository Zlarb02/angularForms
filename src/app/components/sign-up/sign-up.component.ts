import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  newUser: User = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  onSubmit() {
    console.log("ok")
  }
}
