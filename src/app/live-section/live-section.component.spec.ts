import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSectionComponent } from './live-section.component';

describe('LiveSectionComponent', () => {
  let component: LiveSectionComponent;
  let fixture: ComponentFixture<LiveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
