import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigHeroDetailComponent } from './big-hero-detail.component';

describe('BigHeroDetailComponent', () => {
  let component: BigHeroDetailComponent;
  let fixture: ComponentFixture<BigHeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigHeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
