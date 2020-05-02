import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { MissionService } from '../../services/mission.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.less']
})
export class AstronautComponent implements OnInit, OnDestroy {
	@Input('astronaut') astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) { 
  	this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
    });
  }

  ngOnInit() {
  }

  confirm($event) {
    this.confirmed = true;
    console.log(this.mission);
    this.mission.concat(' Done!');
    this.missionService.confirmMission(this.astronaut, this.mission);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
