import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs/Observable';
import { Observer }    from 'rxjs/Observer';
import { NewWordComponent } from '../components/new-word/new-word.component';

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<any> {

  constructor() { }

  canDeactivate(component: NewWordComponent): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      if (component.form.newWord.eng || component.form.newWord.ru) {
        confirm('Вы точно хотите выйти со страницы?') ? observer.next(true) : observer.next(false);
      } else {
        observer.next(true);
      }
    });
  }
}
