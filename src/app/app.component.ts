import { Component } from '@angular/core';
import { LiveService } from './live.service';
import { ProgramsService } from './programs.service';
import { RecordingsService } from './recordings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public liveService: LiveService, public programsService: ProgramsService,
    public recordingsService: RecordingsService) {

  }
  title = 'Akhand Kertanee Jatha, Delhi';

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
