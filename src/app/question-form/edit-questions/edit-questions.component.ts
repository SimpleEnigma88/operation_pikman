import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css'],
})
export class EditQuestionsComponent {

  onFormSubmit(formObj: NgForm){
    console.log('Submitted!', formObj.value);
  }

  constructor(){

  }
}
