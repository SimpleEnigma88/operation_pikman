import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  questionList: any[] = [];
  questionList$: Observable<any[]>;

  constructor(private triviaService: TriviaService) { }

  ngOnInit() {
    this.triviaService.getQuestions();
    this.triviaService.questionListSub.subscribe((questionList) => {
      this.questionList = questionList;
    });
    this.questionList$ = this.triviaService.questionListSub.asObservable();
  }

  addQuestion() {
    this.triviaService.addQuestionToDB('Test question', 'Test answer');
  }

  updateQuestion() {
    if (this.questionList.length > 0) {
      const lastQuestionId = this.questionList[this.questionList.length - 1].id;
      this.triviaService.updateQuestion(lastQuestionId, 'Updated question', 'Updated answer');
    } else {
      console.log('No questions available to update');
    }
  }

  deleteQuestion() {
    if (this.questionList.length > 0) {
      const lastQuestionId = this.questionList[this.questionList.length - 1].id;
      this.triviaService.deleteQuestion(lastQuestionId);
    } else {
      console.log('No questions available to delete');
    }
  }
}
