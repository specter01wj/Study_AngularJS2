import { Component, OnInit } from '@angular/core';
import { MissionService }     from '../services/mission.service';

@Component({
  selector: 'app-bidirectional-service',
  templateUrl: './bidirectional-service.component.html',
  styleUrls: ['./bidirectional-service.component.less']
})
export class BidirectionalServiceComponent implements OnInit {
	astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) { 
  	missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      }
    );
    missionService.missionConfirmed_2$.subscribe(
      mission => {
        this.history[this.history.length - 1] = this.history[this.history.length - 1].concat(` --- ${mission}`);
      }
    );
  }

  ngOnInit() {
  }

  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

}
