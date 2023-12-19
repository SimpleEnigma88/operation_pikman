import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  dbURL = 'https://us-central1-pikman-45f13.cloudfunctions.net/pikmanTrivia';
  private TMDB_API_KEY = environment.TMDB_API_KEY;
  private tmdbUrl = 'https://api.themoviedb.org/3';
  questionList: any[] = [];
  questionSub = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  getQuestions(numQuestions?: number) {
    return this.http.get(this.dbURL)
      .subscribe({
        next: (res) => {
          this.questionList = [];
          for (const key in res) {
            this.questionList.push({ id: key, ...res[key] });
          }
          if (numQuestions) {
            this.questionList = this.getRandom(this.questionList, numQuestions);
          }
          this.questionSub.next(this.questionList);
        },
        error: (err) => {
          console.log("err: ", err);
        },
        complete: () => {
        }
      });
  }

  getRandom(arr, n) {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  addQuestionToDB(movieTitle: string, question: string, answer: string) {
    return this.http.post(this.dbURL, { movieTitle, question, answer })
      .subscribe({
        next: (res) => {
          this.getQuestions();
          this.snackBar.open("Question was added!", 'Close', {
            duration: 3500,
          });
        },
        error: (err) => {
          console.log("err: ", err);
          this.snackBar.open("There was an error adding your trivia question!", 'Close', {
            duration: 3500,
          });
        },
        complete: () => {
          console.log("complete");

        }
      });
  }

  updateQuestion(id: string, movieTitle: string, question: string, answer: string) {
    return this.http.put(`${this.dbURL}/questions/${id}`, { movieTitle, question, answer })
      .subscribe({
        next: (res) => {
          console.log("res: ", res);
          if (res) {
            this.getQuestions();
            this.snackBar.open("Question was updated!", 'Close', {
              duration: 3500,
            });
          }
        },
        error: (err) => {
          this.snackBar.open("There was an error updating your trivia question!", 'Close', {
            duration: 3500,
          });
        }
      });
  }

  deleteQuestion(id: string) {
    return this.http.delete(`${this.dbURL}/questions/${id}`)
      .subscribe({
        next: (res) => {
          this.getQuestions();
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
