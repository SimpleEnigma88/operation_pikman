import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionResultService {
  userIsRight = new BehaviorSubject(null);

answerReceived(result: string) {
  this.userIsRight.next(result);
}

  constructor() { }
}
