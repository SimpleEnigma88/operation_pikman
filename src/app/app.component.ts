import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pikman Movie Trivia';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log("Form Value ", form.value);
    this.authService.signup(form.value.email, form.value.password)
      .subscribe({
        next: (res) => {
          console.log("Sign up res: ", res);
        },
        error: (err) => {
          console.log("Sign up Error: ", err);
        }
      });
  }

  onLogin(form: NgForm) {
    console.log("Form Value ", form.value);
    this.authService.login(form.value.loginEmail, form.value.loginPassword)
      .subscribe({
        next: (res) => {
          console.log("Login res: ", res);
        },
        error: (err) => {
          console.log("Login Error: ", err);
          console.error("Error in depth: ", err.error.error);
        }
      });
  }
}



