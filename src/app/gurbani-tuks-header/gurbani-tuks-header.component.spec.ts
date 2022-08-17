import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GurbaniTuksHeaderComponent } from './gurbani-tuks-header.component';

describe('GurbaniTuksHeaderComponent', () => {
  let component: GurbaniTuksHeaderComponent;
  let fixture: ComponentFixture<GurbaniTuksHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GurbaniTuksHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GurbaniTuksHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
