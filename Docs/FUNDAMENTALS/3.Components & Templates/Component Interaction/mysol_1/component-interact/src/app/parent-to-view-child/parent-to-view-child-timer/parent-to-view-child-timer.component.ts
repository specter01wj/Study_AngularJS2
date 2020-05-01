import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent-to-view-child-timer',
  templateUrl: './parent-to-view-child-timer.component.html',
  styleUrls: ['./parent-to-view-child-timer.component.less']
})
export class ParentToViewChildTimerComponent implements OnInit, OnDestroy {
	intervalId = 0;
  message = '';
  seconds = 11;

  constructor() { }

  ngOnInit() {
  	this.start();
  }

  clearTimer() { clearInterval(this.intervalId); }
  
  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }
  stop()  {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

}
