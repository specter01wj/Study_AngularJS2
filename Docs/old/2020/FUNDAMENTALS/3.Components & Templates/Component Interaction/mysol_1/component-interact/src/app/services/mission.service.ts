import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor() { }

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  private missionConfirmedSource_2 = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();
  missionConfirmed_2$ = this.missionConfirmedSource_2.asObservable();

  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string, mission: string) {
    this.missionConfirmedSource.next(astronaut);
    this.missionConfirmedSource_2.next(mission);
  }
  
}
