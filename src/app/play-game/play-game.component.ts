import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestionResultService } from '../result.service';
@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {
  trivia_number = 1;
  curQuestion: string = "Question 1"
  result: string = "";
  sub: Subscription

  constructor(private questionService: QuestionResultService) {
    console.log(this.result);
  }

  goToNextQuestion() {
  }

  ngOnInit(): void {
    this.sub = this.questionService.userIsRight.subscribe((result) => {
      this.result = result
    })
    console.log(this.result);
  }
}
