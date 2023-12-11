import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create-question-form',
  templateUrl: './create-question-form.component.html',
  styleUrls: ['./create-question-form.component.css'],
})

export class CreateQuestionFormComponent {
  constructor(){}

  questFormSubmitted = false;
    questDetails = {
      question: " ",
      answer: " ",
    };

  onQuestFormSubmit(formObj: NgForm){
    console.log('Submitted!', formObj.value);
    this.questFormSubmitted = true;
    this.questDetails.question = formObj.value.question;
    this.questDetails.answer = formObj.value.answer;

    formObj.reset();
  }
 }
