import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { StatsService } from '../shared/services/stats.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router, private statService: StatsService) { }

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
