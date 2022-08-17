import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { Live } from './types/live';
import { MediaType } from './types/media-type';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class LiveService {
  liveList$ = new BehaviorSubject<Live[] | null>(null);
  constructor(private http: HttpClient) {
    this.setupLiveList();
  }
  setupLiveList() {
    this.http.get<any>('assets/live.json')
      .pipe(catchError(Utils.handleError<any>("setupLiveList", undefined)))
      .subscribe(liveJson => this.updateLiveList(liveJson));
  }

  updateLiveList(liveJson: any): void {
    if (liveJson) {
      if (liveJson.live.length) {
        const liveList: Live[] = liveJson.live.map((liveEntry: any) => {
          return {
            url: liveEntry.url,
            title: liveEntry.title,
            end_date: new Date((new Date(liveEntry.end_date)).toDateString()),
            source: MediaType[liveEntry.source]
          };
        });
        // only show live for which end date has not passed
        const today = new Date((new Date()).toDateString());
        this.liveList$.next(liveList.filter(liveEntry => liveEntry.end_date >= today));
      }
    }
  }
}
