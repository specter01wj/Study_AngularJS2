import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from '../../interface/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.less']
})
export class HeroFormComponent implements OnInit {
	@Input() hero: Hero;
  @ViewChild('heroForm') form: NgForm;
  
  private _submitMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

  get submitMessage() {
    if (this.form && !this.form.valid) {
      this._submitMessage = '';
    }
    return this._submitMessage;
  }

  onSubmit(form: NgForm) {
    this._submitMessage =  'Submitted. form value is ' + JSON.stringify(form.value);
  }

}
