import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { QuestionResultService } from '../question-result.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
currentQuestion: string = "test";
correctAnswer: string = "true";

constructor(private questionResult: QuestionResultService) {}

submitAnswer(FormObj: NgForm) {
  console.log(FormObj.value.answer, this.correctAnswer);
  if (FormObj.value.answer == this.correctAnswer) {
    this.questionResult.answerReceived("Correct!!!");
  } else {
    this.questionResult.answerReceived("Wrong Answer!");
  }
}
}
