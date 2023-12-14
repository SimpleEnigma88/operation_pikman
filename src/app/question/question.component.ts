import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../trivia.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { QuestionResultService } from '../result.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
  questionList: any[] = [];
  currentQuestion: string = "test";
  correctAnswer: string = "true";
  subs: Subscription;
  counter: number = 0;

  constructor(private triviaService: TriviaService, private questionResult: QuestionResultService) { }

  goToNextQuestion() {
    this.counter++;
    this.currentQuestion = this.questionList[this.counter].question;
    this.correctAnswer = this.questionList[this.counter].answer;
  }

  submitAnswer(FormObj: NgForm) {
    console.log(FormObj.value.answer, this.correctAnswer);
    if (FormObj.value.answer == this.correctAnswer) {
      this.questionResult.answerReceived("Correct!!!");
    } else {
      this.questionResult.answerReceived("Wrong Answer!");
    }
  }

  ngOnInit(): void {
    this.triviaService.getQuestions();
    this.subs = this.triviaService.questionSub.subscribe(
      (res) => {
        if (res) {
          this.questionList = res;
          this.currentQuestion = res[0].question;
          this.correctAnswer = res[0].answer;
          console.log("inside: ", this.currentQuestion, this.correctAnswer);
        }

      }
    );
    console.log("outside: ", this.currentQuestion, this.correctAnswer);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
