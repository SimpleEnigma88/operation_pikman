import { Component, OnInit } from '@angular/core';
import { QuestionResultService } from '../question-result.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit{
  trivia_number = 1;
  curQuestion: string = "Question 1"
  result: string = "";
sub: Subscription
  goToNextQuestion() {

  }
  constructor (private questionService: QuestionResultService){
    console.log(this.result);
    }
    ngOnInit(): void {
        this.sub = this.questionService.userIsRight.subscribe((result)=>{
          this.result = result
        })
        console.log(this.result);
    }
}
