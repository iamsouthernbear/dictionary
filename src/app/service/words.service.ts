import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IWord, Word } from '../models/word';

@Injectable()
export class WordsService {

  constructor(private _http: HttpClient) {}

  public getWords(): Observable<Word[]> {
    return Observable.create(observer => {
      this._http
        .get<IWord[]>('/api/words')
        .subscribe(
          response => {
            observer.next(response.map(word => new Word(word)));
            observer.complete();
          },
          errors => observer.error(errors)
        );
    });
  }

  public postWord(word: Word): Observable<Word> {
    return this._http
             .post('/api/words', word, Option)
             .catch(error => Observable.throw(error));
  }

  public getWord(id: any): Observable<Word> {
    return Observable.create(observer => {
      this._http
        .get<IWord>(`api/words/${id}`)
        .subscribe(
          response => observer.next(response)
        );
    });
  }

  public deleteWord(id: any): Observable<any> {
    return this._http
             .delete(`/api/words/${id}`)
             .catch(error => Observable.throw(error));
  }

  public updateWord(word: Word): Observable<any> {
    return Observable.create(observer => {
            this._http
              .put(`api/words/${word.id}`, word, Option)
              .subscribe(
                response => {
                  observer.next(response);
                }
              );
    });
  }
}
