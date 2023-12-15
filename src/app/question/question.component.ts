import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../trivia.service';
import { Subscription } from 'rxjs';
import { QuestionResultService } from '../result.service';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
  questionList: any[] = [];
  currentQuestion: string = "";
  correctAnswer: string = "";
  currentMovie: string = "";
  subs: Subscription;
  counter: number = 0;
  Tsub: Subscription;
  Qsub: Subscription;
  Msub: Subscription;
  result: string = "";
  showNext: boolean = false;
  picUrl: string = "";

  constructor(
    private triviaService: TriviaService,
    private questionResult: QuestionResultService,
    private statsService: StatsService) { }

  goToNextQuestion() {
    this.counter++;
    this.currentQuestion = this.questionList[this.counter].question;
    console.log(this.currentQuestion);
    this.correctAnswer = this.questionList[this.counter].answer;
    this.getPosterUrl()

    // Reset the form
    const form = document.getElementById('form') as HTMLFormElement;
    form.reset();
    this.showNext = false;
    this.questionResult.userIsRight.next(null);

  }

  getPosterUrl() {
    this.Msub = this.triviaService.searchMovies(this.questionList[this.counter].movieTitle).subscribe(
      (res) => {
        console.log(res);
        this.picUrl = "https://image.tmdb.org/t/p/w500" + res.results[0].poster_path;
        console.log(this.picUrl);
      }
    );
  }

  submitAnswer(FormObj: NgForm) {
    this.showNext = true;
    console.log(FormObj.value.answer, this.correctAnswer);
    if (FormObj.value.answer == this.correctAnswer) {
      this.questionResult.answerReceived("Correct!!!");
      this.statsService.incrementCorrect();
    } else {
      this.questionResult.answerReceived("Wrong Answer!");
      this.statsService.incrementWrong();
    }
  }

  ngOnInit(): void {
    this.triviaService.getQuestions();
    this.Tsub = this.triviaService.questionSub.subscribe(
      (res) => {
        if (res) {
          this.questionList = res;
          this.currentQuestion = res[0].question;
          this.correctAnswer = res[0].answer;
          console.log("inside: ", this.currentQuestion, this.correctAnswer);
          this.getPosterUrl()
        }

      }
    );
    console.log("outside: ", this.currentQuestion, this.correctAnswer);
    this.Qsub = this.questionResult.userIsRight.subscribe((result) => {
      this.result = result
    })
  }

  ngOnDestroy(): void {
    this.Qsub.unsubscribe();
    this.Tsub.unsubscribe();
  }
}
