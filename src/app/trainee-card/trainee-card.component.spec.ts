import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeCardComponent } from './trainee-card.component';

describe('TraineeCardComponent', () => {
  let component: TraineeCardComponent;
  let fixture: ComponentFixture<TraineeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});