import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WordsService } from './words.service';
import { Observable }    from 'rxjs/Observable';
import { Observer }    from 'rxjs/Observer';


@Injectable()
export class CanActivateGuardService implements CanActivate {

  constructor(private wordsService: WordsService, private router: Router) {}


  canActivate(): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      this.wordsService.getWords().subscribe(words => {
        if (words.length > 19) {
          observer.next(true);
        } else {
          alert('Need more words!'),
          this.router.navigate(['/new-word']),
          observer.next(false);
        }
      })
    })
  }
}
