import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { MissionService } from '../../services/mission.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.less']
})
export class AstronautComponent implements OnInit, OnDestroy {
	@Input() astronaut: string;
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

}
