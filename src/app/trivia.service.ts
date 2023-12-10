import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  dbURL = 'https://us-central1-pikman-45f13.cloudfunctions.net/pikmanTrivia';
  private TMDB_API_KEY = environment.TMDB_API_KEY;
  private tmdbUrl = 'https://api.themoviedb.org/3';
  questionListSub = new BehaviorSubject<any>(null);
  questionList: any[] = [];

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  addQuestionToDB(question: string, answer: string) {
    return this.http.post(this.dbURL, { question, answer })
      .subscribe({
        next: (res) => {
          this.snackBar.open("Question was added!", 'Close', {
            duration: 3500,
          });
          this.getQuestions();
        },
        error: (err) => {
          this.snackBar.open("There was an error adding your trivia question!", 'Close', {
            duration: 3500,
          });
        },
        complete: () => {
          console.log("complete");
        }
      });
  }

  getQuestions() {
    return this.http.get(this.dbURL)
      .subscribe({
        next: (res) => {
          this.questionList = [];
          for (const key in res) {
            this.questionList.push({ id: key, ...res[key] });
          }
          this.questionListSub.next(this.questionList);
        },
        error: (err) => {
          console.log("err: ", err);
        },
        complete: () => {
          console.log("complete");
        }
      });
  }

  /*   getQuestionById(id: string) {
      return this.http.get(`${this.dbURL}/questions/${id}`)
        .subscribe({
          next: (res) => {
            console.log("res: ", res);
            this.questionSub.next(res);
          },
          error: (err) => {
            console.log("err: ", err);
          },
          complete: () => {
            console.log("complete");
          }
        });
    } */

  updateQuestion(id: string, question: string, answer: string) {
    return this.http.put(`${this.dbURL}/questions/${id}`, { question, answer })
      .subscribe({
        next: (res) => {
          this.snackBar.open("Question was updated!", 'Close', {
            duration: 3500,
          });
          this.getQuestions();
        },
        error: (err) => {
          this.snackBar.open("There was an error updating your trivia question!", 'Close', {
            duration: 3500,
          });
        }
      });;
  }

  deleteQuestion(id: string) {
    return this.http.delete(`${this.dbURL}/questions/${id}`)
      .subscribe({
        next: (res) => {
          this.snackBar.open("Question was deleted!", 'Close', {
            duration: 3500,
          });
          this.getQuestions();
        },
        error: (err) => {
          this.snackBar.open("There was an error deleting your trivia question!", 'Close', {
            duration: 3500,
          });
        }
      });;
  }

  searchMovies(query: string): Observable<any> {
    const url = `${this.tmdbUrl}/search/movie?api_key=${this.TMDB_API_KEY}&query=${encodeURIComponent(query)}`;
    return this.http.get(url);
  }


}
