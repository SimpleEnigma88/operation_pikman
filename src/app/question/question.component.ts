import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../shared/services/trivia.service';
import { Subscription } from 'rxjs';
import { QuestionResultService } from '../shared/services/result.service';
import { StatsService } from '../shared/services/stats.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
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
  isSubmitted: boolean = false;
  rightAnswers: number;
  wrongAnswers: number;
  score: number;
  resultsButtonClicked: boolean = false;
  isRadioButtonSelected = false;

  constructor(
    private triviaService: TriviaService,
    private questionResult: QuestionResultService,
    private statsService: StatsService) { }


  onRadioButtonSelect() {
    this.isRadioButtonSelected = true;
  }

  goToNextQuestion() {
    this.counter++;
    this.currentQuestion = this.questionList[this.counter].question;
    this.correctAnswer = this.questionList[this.counter].answer;
    this.getPosterUrl()

    // Reset the form
    const form = document.getElementById('form') as HTMLFormElement;
    form.reset();
    this.showNext = false;
    this.questionResult.userIsRight.next(null);
    this.isSubmitted = false;
    this.isRadioButtonSelected = false;
  }

  goToResultsPage() {
    this.resultsButtonClicked = true;
    this.rightAnswers = this.statsService.testRight;
    this.wrongAnswers = this.statsService.testWrong;
    this.score = this.statsService.calculateScore();
  }

  getPosterUrl() {
    this.Msub = this.triviaService.searchMovies(this.questionList[this.counter].movieTitle).subscribe(
      (res) => {
        this.picUrl = "https://image.tmdb.org/t/p/w500" + res.results[0].poster_path;
      }
    );
  }

  submitAnswer(FormObj: NgForm) {
    this.showNext = true;
    if (FormObj.value.answer == this.correctAnswer) {
      this.questionResult.answerReceived("Correct!!!");
      this.statsService.incrementCorrect();
    } else {
      this.questionResult.answerReceived("Wrong Answer!");
      this.statsService.incrementWrong();
    }
    this.isSubmitted = true;
  }

  ngOnInit(): void {
    this.triviaService.getQuestions(3);
    this.Tsub = this.triviaService.questionSub.subscribe(
      (res) => {
        if (res) {
          this.questionList = res;
          this.currentQuestion = res[0].question;
          this.correctAnswer = res[0].answer;
          this.getPosterUrl()
        }

      }
    );
    this.Qsub = this.questionResult.userIsRight.subscribe((result) => {
      this.result = result
    })
  }

  ngOnDestroy(): void {
    this.Qsub.unsubscribe();
    this.Tsub.unsubscribe();
  }
}
