import { Component, Input, OnInit } from '@angular/core';
import { Media } from '../types/media';
import { MediaType } from '../types/media-type';

@Component({
  selector: 'app-media-box',
  templateUrl: './media-box.component.html',
  styleUrls: ['./media-box.component.scss']
})
export class MediaBoxComponent implements OnInit {
  @Input() media?: Media;
  mediaType = MediaType;

  constructor() { }

  ngOnInit(): void {
  }

}
