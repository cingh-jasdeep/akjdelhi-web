import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GurbaniTuksService } from '../gurbani-tuks.service';

@Component({
  selector: 'app-gurbani-tuks-header',
  templateUrl: './gurbani-tuks-header.component.html',
  styleUrls: ['./gurbani-tuks-header.component.scss']
})

export class GurbaniTuksHeaderComponent implements OnInit, AfterViewInit {

  constructor(public gurbaniTuks: GurbaniTuksService) { }


  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
