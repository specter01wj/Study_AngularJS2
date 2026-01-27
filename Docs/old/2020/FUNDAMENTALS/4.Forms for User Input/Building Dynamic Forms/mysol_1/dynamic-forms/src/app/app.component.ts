import { Component } from '@angular/core';

import { QuestionService } from './services/question.service';
import { QuestionBase }    from './services/question-base';
import { Observable }      from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'dynamic-forms';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

}
