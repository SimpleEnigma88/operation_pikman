import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  dbURL = 'https://pikman-45f13-default-rtdb.firebaseio.com/';
  TMDB_API_KEY = environment.TMDB_API_KEY;



  constructor(private authService: AuthService, private http: HttpClient) { }


  addQuestionToDB(question: string, answers: string[], correctAnswer: string) {

  }

  updateQuestion(id: string, question: string, answers: string[], correctAnswer: string) {
    const data = {
      question,
      answers,
      correctAnswer
    };

    return this.http.patch(this.dbURL + '/questions/' + id + '.json', data);
  }
}
