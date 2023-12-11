import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from 'src/app/question.model';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css'],
})

export class EditQuestionsComponent {

  myQuestions: Question[] = [
    new Question('What is my question?' , 'This is my answer', 'This is my correct answer', '1')
  ];

  onEditFormSubmit(formObj: NgForm){
    console.log('Submitted!', formObj.value);
  }

  constructor(){

  }
}
