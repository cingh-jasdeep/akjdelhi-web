import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSectionComponent } from './upcoming-section.component';

describe('UpcomingSectionComponent', () => {
  let component: UpcomingSectionComponent;
  let fixture: ComponentFixture<UpcomingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
