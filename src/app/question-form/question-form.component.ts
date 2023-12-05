import { Component, } from '@angular/core';
import { MatTabQComponent } from './mat-tab-q/mat-tab-q.component';
import { CreateQuestionFormComponent } from './create-question-form/create-question-form.component';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css'],
  standalone: true,
  imports: [
    MatTabQComponent,
    CreateQuestionFormComponent,
  ]
})
export class QuestionFormComponent {

  constructor(){

  }

}
