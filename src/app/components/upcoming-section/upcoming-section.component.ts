import { Component, OnInit } from '@angular/core';
import { ProgramsService } from 'src/app/services/programs.service';
import { Program } from 'src/app/types/program';

@Component({
  selector: 'app-upcoming-section',
  templateUrl: './upcoming-section.component.html',
  styleUrls: ['./upcoming-section.component.scss']
})
export class UpcomingSectionComponent implements OnInit {

  selectedProgram: Program | null = null;
  constructor(public programService: ProgramsService) { }

  ngOnInit(): void {
  }

}
