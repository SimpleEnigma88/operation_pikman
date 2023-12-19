import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { StatsService } from '../shared/services/stats.service';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  user
  userSub: Subscription
  isLoggedIn = false;
  constructor(private authService: AuthService, private router: Router, private statService: StatsService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.user = user;
    });
    this.isLoggedIn = !!this.user;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  reloadPlayRoute() {
    this.statService.resetStats();
    this.router.navigateByUrl('/dummy', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/play']);
    });
  }

  goToQManager() {
    this.router.navigate(['/edit']);
  }

  Logout() {
    this.authService.logout();
  }

}
