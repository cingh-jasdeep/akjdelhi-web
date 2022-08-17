import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';

@Component({
  selector: 'app-upcoming-section',
  templateUrl: './upcoming-section.component.html',
  styleUrls: ['./upcoming-section.component.scss']
})
export class UpcomingSectionComponent implements OnInit {

  constructor(public programService: ProgramsService) { }

  ngOnInit(): void {
  }

}
