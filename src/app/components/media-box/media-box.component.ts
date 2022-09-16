import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Utils } from 'src/app/utils';
import { Media } from '../../types/media';
import { MediaType } from '../../types/media-type';

@Component({
  selector: 'app-media-box',
  templateUrl: './media-box.component.html',
  styleUrls: ['./media-box.component.scss']
})
export class MediaBoxComponent implements OnInit, OnChanges {
  @Input() media?: Media;
  mediaType = MediaType;
  refreshFB = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const prev: Media = changes['media'].previousValue
    const curr: Media = changes['media'].currentValue
    if (prev && curr && prev.source === MediaType.FB && prev.source === curr.source) {
      setTimeout(() => { (window as any).FB.XFBML.parse(); });
    }
  }



  ngOnInit(): void {
  }

  youtube_parser = Utils.youtube_parser;


}
