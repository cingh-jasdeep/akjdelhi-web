import { Component, OnInit } from '@angular/core';
import { LiveService } from '../live.service';
import { Live } from '../types/live';

@Component({
  selector: 'app-live-section',
  templateUrl: './live-section.component.html',
  styleUrls: ['./live-section.component.scss']
})
export class LiveSectionComponent implements OnInit {

  constructor(public liveService: LiveService) { }

  liveList: Live[] | null = null;
  currLiveIndex: number | null = null;

  ngOnInit(): void {
    this.liveService.liveList$.subscribe(liveList => {
      this.liveList = liveList;
      this.currLiveIndex = this.liveList ? (this.liveList.length ? 0 : null) : null;
    })
  }

}
