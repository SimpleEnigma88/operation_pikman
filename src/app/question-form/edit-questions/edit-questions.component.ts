import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../../shared/services/trivia.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css'],
})

export class EditQuestionsComponent implements OnInit, OnDestroy {
  @ViewChild('templateForm') templateFormRef: NgForm;

  questionList: any[] = [];
  questionSub: Subscription;
  Msub: Subscription;
  picUrl = "";
  selectedCard: any = {
    title: " ",
    question: " ",
    answer: " ",
    id: " ",
  };

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

  cancelEdit() {
    this.templateFormRef.reset();
    this.editFormSubmitted = false;
    this.selectedCard = null;
  }

  onCardClick(question: any) {
    this.selectedCard = question;
    this.editFormSubmitted = true;
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

  editFormSubmitted = false;
  editDetails = {
    title: " ",
    question: " ",
    answer: " ",
    id: " ",
  };

  onEditFormSubmit(formObj: NgForm) {
    this.editFormSubmitted = true;
    this.editDetails.title = formObj.value.title;
    this.editDetails.question = formObj.value.question;
    this.editDetails.answer = formObj.value.answer;
    this.editDetails.id = formObj.value.id;
    this.triviaService.updateQuestion(
      this.editDetails.id,
      this.editDetails.title,
      this.editDetails.question,
      this.editDetails.answer
    );
    formObj.reset();
  }
}
