import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { TestComponent } from '../components/test/test.component';
import { Observable }    from 'rxjs/Observable';
import { Observer }    from 'rxjs/Observer';
import { TaskService } from './task.service';

@Injectable()
export class TaskCanDeactivateGuardService implements CanDeactivate<any> {

  constructor(private _taskService: TaskService) { }

  canDeactivate(component: TestComponent): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      if (this._taskService.mainArray.length > 0) {
        confirm('Вы точно хотите выйти со страницы?') ? observer.next(true) : observer.next(false);
      } else {
        observer.next(true);
      }
    });
  }

}
