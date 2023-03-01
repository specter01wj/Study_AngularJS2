import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from '../services/question-base';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.less']
})
export class DynamicFormQuestionComponent implements OnInit {
	@Input() question: QuestionBase<string>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get isValid() { return this.form.controls[this.question.key].valid; }

}
