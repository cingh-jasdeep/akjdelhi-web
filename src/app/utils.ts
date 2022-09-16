import { Observable, of } from "rxjs";

export class Utils {
    /**
  * Handle Http operation that failed.
  * Let the app continue.
  *
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
    static handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // https://angular.io/tutorial/toh-pt6

            // log to console instead
            console.error(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    // https://stackoverflow.com/a/8260383/10030480
    static youtube_parser(url: string) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : '';
    }
}