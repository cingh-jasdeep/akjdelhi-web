import { Component, OnInit } from '@angular/core';
import { RecordingsService } from '../recordings.service';

@Component({
  selector: 'app-recordings-section',
  templateUrl: './recordings-section.component.html',
  styleUrls: ['./recordings-section.component.scss']
})
export class RecordingsSectionComponent implements OnInit {

  constructor(public recordingsService: RecordingsService) { }

  ngOnInit(): void {
  }

}
