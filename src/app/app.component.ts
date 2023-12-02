import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
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
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
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
}

