import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { EditQuestionsComponent } from '../edit-questions/edit-questions.component';
import { CreateQuestionFormComponent } from '../create-question-form/create-question-form.component';

@Component({
  selector: 'app-mat-tab-q',
  templateUrl: './mat-tab-q.component.html',
  styleUrls: ['./mat-tab-q.component.css'],
  standalone: true,
  imports: [
    MatTabsModule,
    CreateQuestionFormComponent,
    EditQuestionsComponent]
})

export class MatTabQComponent {

}
