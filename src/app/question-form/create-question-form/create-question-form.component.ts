import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../../shared/services/trivia.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create-question-form',
  templateUrl: './create-question-form.component.html',
  styleUrls: ['./create-question-form.component.css'],
})

export class CreateQuestionFormComponent implements OnInit, OnDestroy {

  questionList: any[] = [];
  questionSub: Subscription;

  constructor(private triviaService: TriviaService) {
  }

  ngOnInit(): void {
    this.triviaService.getQuestions();
    this.questionSub = this.triviaService.questionSub.subscribe({
      next: (res) => {
        this.questionList = res;
      }
    });
  }

  ngOnDestroy(): void {
    this.questionSub.unsubscribe();
  }

  questFormSubmitted = false;
  questDetails = {
    title: " ",
    question: " ",
    answer: " ",
  };

  onQuestFormSubmit(formObj: NgForm) {
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
