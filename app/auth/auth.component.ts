import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm);
  }
  onSignup(signupForm: NgForm) {
    console.log(signupForm.value);
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
