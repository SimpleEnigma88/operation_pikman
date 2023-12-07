import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-question-form',
  templateUrl: './create-question-form.component.html',
  styleUrls: ['./create-question-form.component.css'],
})

export class CreateQuestionFormComponent {

  onFormSubmit(formObj: NgForm){
    console.log('Submitted!', formObj.value);
  }

  constructor(){

  }
}
