import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompWithHostBindingComponent } from './comp-with-host-binding.component';

describe('CompWithHostBindingComponent', () => {
  let component: CompWithHostBindingComponent;
  let fixture: ComponentFixture<CompWithHostBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompWithHostBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompWithHostBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
