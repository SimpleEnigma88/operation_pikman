import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'operation_pikman';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  onSubmit(form: NgForm) {
    this.authService.signup(form.value.email, form.value.password)
      .subscribe({
        next: (res) => {
        },
        error: (err) => {
          console.log("Sign up Error: ", err);
        }
      });
  }

  onLogin(form: NgForm) {
    this.authService.login(form.value.loginEmail, form.value.loginPassword)
      .subscribe({
        next: (res) => {
        },
        error: (err) => {
          console.log("Login Error: ", err);
        }
      });
  }
}



