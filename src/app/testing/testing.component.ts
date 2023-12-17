/* import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  questionList: any[] = [];
  moviePosters: any[] = [];
  movieQuery: string;
  subs: Subscription;

  constructor(private triviaService: TriviaService) {

  }

  ngOnInit(): void {
    this.triviaService.getQuestions();
    this.subs = this.triviaService.questionSub.subscribe(
      (res) => {
        if (res) {
          this.questionList = res;
        }

      }
    );
  }

  getMoviePosters(query: string) {
    this.triviaService.searchMovies(query).subscribe((response) => {
      this.moviePosters = response.results;
    });
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
 */
