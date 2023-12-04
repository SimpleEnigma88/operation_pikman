import { Component } from '@angular/core';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent {
  trivia_number = 1;
  curQuestion: string = "Question 1"
  result: string = "test"
  goToNextQuestion() {

  }
}
