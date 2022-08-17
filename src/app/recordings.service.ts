import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { MediaType } from './types/media-type';
import { Recording } from './types/recording';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class RecordingsService {
  recordingList$ = new BehaviorSubject<Recording[] | null>(null);
  constructor(private http: HttpClient) {
    this.setupRecordingList();
  }
  setupRecordingList() {
    this.http.get<any>('assets/recordings.json')
      .pipe(catchError(Utils.handleError<any>("setupRecordingList", undefined)))
      .subscribe(recordingsJson => this.updateRecordingList(recordingsJson));
  }

  updateRecordingList(recordingsJson: any): void {
    if (recordingsJson) {
      if (recordingsJson.recordings.length) {
        const recordingList: Recording[] = recordingsJson.recordings.map((recording: any) => {
          return {
            url: recording.url,
            title: recording.title,
            source: MediaType[recording.source]
          };
        });
        this.recordingList$.next(recordingList);
      }
    }
  }
}
