import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  errMsg: string = null;
  authObserv: Observable<AuthResponseData>;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.isLoginMode)
  }

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onAuthFormSubmit(formObj: NgForm) {
    if (!formObj.valid) return;

    const { email, password } = formObj.value

    let authObserv: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObserv = this.authService.login(formObj.value.email, formObj.value.password);
    } else {
      authObserv = this.authService.signup(formObj.value.email, formObj.value.password);
    }
    // console.log(authObserv)
    authObserv.subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/play'])//will be the where it goes once logged in
      },
      errorMessage => {
        console.log(errorMessage);
        this.errMsg = errorMessage
      }
    );
    formObj.reset();
  }



}
