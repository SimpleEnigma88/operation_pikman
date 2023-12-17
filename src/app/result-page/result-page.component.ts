import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from '../shared/services/stats.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit, OnDestroy {
  rightAnswers: number;
  wrongAnswers: number;
  score: number;
  Rsub: Subscription;
  Wsub: Subscription;

  constructor(private router: Router, private statsService: StatsService) { }

  ngOnInit(): void {
    this.Rsub = this.statsService.correctAnswers.subscribe(
      (res) => {
        this.rightAnswers = res;
      }
    );
    this.Wsub = this.statsService.wrongAnswers.subscribe(
      (res) => {
        this.wrongAnswers = res;
      }
    );
    this.score = this.rightAnswers / (this.rightAnswers + this.wrongAnswers) * 100;
  }

  ngOnDestroy(): void {
    this.Rsub.unsubscribe();
    this.Wsub.unsubscribe();
  }

}
