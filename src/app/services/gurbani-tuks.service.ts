import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, interval, Observable, of } from 'rxjs';
import { GurbaniTuk, GurbaniTuks } from '../types/gurbani-tuk';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})


export class GurbaniTuksService {
  currentTuk$ = new BehaviorSubject<GurbaniTuk | null>(null);
  constructor(private http: HttpClient) {
    this.setupGurbaniTuks();
  }

  setupGurbaniTuks() {
    this.http.get<GurbaniTuks>('assets/gurbani.json')
      .pipe(catchError(Utils.handleError<GurbaniTuks>("setupGurbaniTuks", undefined)))
      .subscribe(gurbaniTuks => this.loopGurbaniTuks(gurbaniTuks));
  }

  loopGurbaniTuks(gurbaniTuks: GurbaniTuks): void {
    const tuks = gurbaniTuks.tuks;
    if (tuks.length > 0) {
      this.currentTuk$.next(tuks[0]);
      if (tuks.length > 1) {
        interval(10000).subscribe(n => {
          this.currentTuk$.next(tuks[(n + 1) % tuks.length]);
        });
      }
    }

  }
}
