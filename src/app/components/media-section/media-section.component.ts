import { Component, Input, OnInit } from '@angular/core';
import { Media } from 'src/app/types/media';

@Component({
  selector: 'app-media-section',
  templateUrl: './media-section.component.html',
  styleUrls: ['./media-section.component.scss']
})
export class MediaSectionComponent implements OnInit {

  @Input() mediaList: Media[] | null = null;
  @Input() title: string | null = null;

  currIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
