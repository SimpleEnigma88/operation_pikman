import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  correctAnswers: number = 0;
  wrongAnswers: number = 0;
  score: number = 0;

  constructor() { }

  incrementCorrect() {
    this.correctAnswers++;
  }

  incrementWrong() {
    this.wrongAnswers++;
  }

  calculateScore() {
    this.score = this.correctAnswers / (this.correctAnswers + this.wrongAnswers) * 100;
  }
}
