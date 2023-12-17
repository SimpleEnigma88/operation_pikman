import { Component, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css'],
})
export class QuestionFormComponent {}

  export class LandingPageComponent {
    constructor(private router: Router, private route: ActivatedRoute){}
  }
