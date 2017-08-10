import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Word } from '../word';

@Injectable()
export class WordsService {

  constructor(private _http: HttpClient) {}

  public getWords(): Observable<Word[]> {
    return Observable.create(observer => {
      this._http
        .get('/api/words')
        .subscribe(
          response => observer.next(response),
          errors => observer.error(errors)
        );
    });
  }
}
