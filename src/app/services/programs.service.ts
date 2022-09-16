import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { Program } from '../types/program';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  programList$ = new BehaviorSubject<Program[] | null>(null);
  constructor(private http: HttpClient) {
    this.setupProgramList();
  }
  setupProgramList() {
    this.http.get<any>('assets/programs.json')
      .pipe(catchError(Utils.handleError<any>("setupProgramList", undefined)))
      .subscribe(programJson => this.updateProgramList(programJson));
  }

  updateProgramList(programJson: any): void {
    if (programJson) {
      if (programJson.programs.length) {
        const programList: Program[] = programJson.programs.map((programEntry: any) => {
          return {
            title: programEntry.title,
            location: programEntry.location,
            poster: programEntry.poster,
            start_date: new Date((new Date(programEntry.start_date)).toDateString()),
            end_date: new Date((new Date(programEntry.end_date)).toDateString()),
          };
        });
        // only show program for which end date has not passed
        const today = new Date((new Date()).toDateString());
        this.programList$.next(programList.filter(programEntry => programEntry.end_date >= today));
      }
    }
  }
}
