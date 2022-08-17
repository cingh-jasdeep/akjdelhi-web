import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingsSectionComponent } from './recordings-section.component';

describe('RecordingsSectionComponent', () => {
  let component: RecordingsSectionComponent;
  let fixture: ComponentFixture<RecordingsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordingsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordingsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
