import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/service/authGoogle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;
  showPassword = false;

  constructor(
    private router: Router,
    private authGoogleService: AuthGoogleService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log('Form submitted!');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.authGoogleService.login();
  }
}
