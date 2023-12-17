import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../../shared/services/trivia.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  selectedCard: any = {
    id: "",
    title: "",
    question: "",
    answer: "",
  };
  displayEditForm = false;

  constructor(private triviaService: TriviaService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.triviaService.getQuestions();
    this.questionSub = this.triviaService.questionSub.subscribe({
      next: (res) => {
        this.questionList = res;
      }
    });
  }

  cancelEdit(templateFormRef: NgForm) {
    console.log("cancel edit");
    templateFormRef.reset();
    this.selectedCard = {
      id: "",
      title: "",
      question: "",
      answer: "",
    };
    this.displayEditForm = false;
  }

  onCardClick(id: string, question: any) {
    this.selectedCard.id = id;
    this.selectedCard.movieTitle = question.movieTitle;
    this.selectedCard.question = question.question;
    this.selectedCard.answer = question.answer;
    this.displayEditForm = true;
  }
  ngOnDestroy(): void {
    this.questionSub.unsubscribe();
  }

  getPosterUrl(title: string) {
    this.Msub = this.triviaService.searchMovies(title).subscribe(
      (res) => {
        this.picUrl = "https://image.tmdb.org/t/p/w500" + res.results[0].poster_path;
      }
    );
  }



  onEditFormSubmit(formObj: NgForm) {
    console.log("onEditFormSubmit")
    console.log(formObj.value);
    console.log(formObj.value.movieTitle);
    console.log(formObj.value.question);
    console.log(formObj.value.answer);
    console.log(formObj.value.cardId);

    this.triviaService.updateQuestion(
      formObj.value.cardId,
      formObj.value.movieTitle,
      formObj.value.question,
      formObj.value.answer,
    );
    this.triviaService.getQuestions();
    formObj.reset();
    this.displayEditForm = false;
  }
}
