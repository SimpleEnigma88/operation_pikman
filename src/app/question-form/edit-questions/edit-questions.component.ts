import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css'],
})

export class EditQuestionsComponent {

  myQuestions: [
    /* new Question('What is my question?' , 'This is my answer', 'This is my correct answer', '1') */
  ] = [];

  onEditFormSubmit(formObj: NgForm){
    console.log('Submitted!', formObj.value);
  }

  constructor(){

  }

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
