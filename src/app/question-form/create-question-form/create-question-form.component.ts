import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../../trivia.service';
@Component({
  selector: 'app-create-question-form',
  templateUrl: './create-question-form.component.html',
  styleUrls: ['./create-question-form.component.css'],
})

export class CreateQuestionFormComponent {
  constructor( private triviaService: TriviaService){

  }
  questFormSubmitted = false;
    questDetails = {
      title: " ",
      question: " ",
      answer: " ",
    };

  onQuestFormSubmit(formObj: NgForm){
    console.log('Submitted!', formObj.value);
    this.questFormSubmitted = true;
    this.questDetails.question = formObj.value.question;
    this.questDetails.answer = formObj.value.answer;
    this.questDetails.title = formObj.value.title;
    this.triviaService.addQuestionToDB(
      this.questDetails.title,
      this.questDetails.question,
      this.questDetails.answer);
    formObj.reset();
  }
 }
