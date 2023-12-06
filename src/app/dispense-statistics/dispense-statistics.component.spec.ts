import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseStatisticsComponent } from './dispense-statistics.component';

describe('DispenseStatisticsComponent', () => {
  let component: DispenseStatisticsComponent;
  let fixture: ComponentFixture<DispenseStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispenseStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispenseStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
