import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.less']
})
export class TemplateReferenceVariablesComponent implements OnInit {
	@ViewChild('itemForm') form: NgForm;

  private _submitMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

  get submitMessage() {
    return this._submitMessage;
  }

  onSubmit(form: NgForm) {
    this._submitMessage = 'Submitted. Form value is ' + JSON.stringify(form.value);
  }

  callPhone(value: string) {
    console.warn(`Calling ${value} ...`);
  }

  callFax(value: string) {
    console.warn(`Faxing ${value} ...`);
  }

}
