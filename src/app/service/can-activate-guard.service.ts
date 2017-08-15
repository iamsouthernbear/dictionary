import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WordsService } from './words.service';
import { Observable }    from 'rxjs/Observable';
import { Observer }    from 'rxjs/Observer';


@Injectable()
export class CanActivateGuardService implements CanActivate {

  constructor(private _wordsService: WordsService, private _router: Router) {}


  canActivate(): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      this._wordsService.getWords().subscribe(words => {
        if (words.length > 19) {
          observer.next(true);
        } else {
          alert('Need more words!'),
          this._router.navigate(['/new-word']),
          observer.next(false);
        }
      })
    })
  }
}
