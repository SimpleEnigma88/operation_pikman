import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  correctAnswers = new Subject<number>;
  wrongAnswers = new Subject<number>;
  testRight: number = 0;
  testWrong: number = 0;


  constructor() { }

  incrementCorrect() {
    this.testRight++;
    this.correctAnswers.next(this.testRight);
  }

  incrementWrong() {
    this.testWrong++;
    this.wrongAnswers.next(this.testWrong);
  }

  calculateScore() {
    return this.testRight / (this.testRight + this.testWrong) * 100;
  }
}
