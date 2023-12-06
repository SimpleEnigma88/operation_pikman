import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
currentQuestion: string = "test";
correctAnswer: string = "true";
userIsRight: boolean = true;


submitAnswer() {
  if ("" == this.correctAnswer) {
    return this.userIsRight;
  } else {
    this.userIsRight = false;
    return this.userIsRight;
  }
}
}
