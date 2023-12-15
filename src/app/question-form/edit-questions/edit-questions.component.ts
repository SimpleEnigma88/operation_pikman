import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../../shared/services/trivia.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css'],
})

export class EditQuestionsComponent implements OnInit, OnDestroy {

  questionList: any[] = [];
  questionSub: Subscription;
  Msub: Subscription;
  picUrl = "";

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

  getPosterUrl(title: string) {
    this.Msub = this.triviaService.searchMovies(title).subscribe(
      (res) => {
        console.log(res);
        this.picUrl = "https://image.tmdb.org/t/p/w500" + res.results[0].poster_path;
        console.log(this.picUrl);
      }
    );
  }

  editFormSubmitted = false;
  editDetails = {
    title: " ",
    question: " ",
    answer: " ",
  };

  onEditFormSubmit(formObj: NgForm) {
    console.log('Submitted!', formObj.value);
    this.editFormSubmitted = true;
    this.editDetails.title = formObj.value.title;
    this.editDetails.question = formObj.value.question;
    this.editDetails.answer = formObj.value.answer;
    formObj.reset();
  }
}
