import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Word, IWord } from '../models/word';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class TaskService {

  public mainArray: Word[];
  public fullArray: Word[];

  public shuffle(array): Array<any> {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  public newTask(): Task {
    const currentWordIndex: number = Math.floor(Math.random() * this.mainArray.length);
    const task: Task = new Task;
    let list: Word[];
    task.currentWord = this.mainArray[currentWordIndex];
    this.mainArray.splice(currentWordIndex, 1);
    list = this.shuffle(this.fullArray.filter(word => word.id !== task.currentWord.id));
    list = list.slice(0, 4);
    list.push(task.currentWord);
    task.wordsList = this.shuffle(list);
    return task;
  }

  public updateList(): Observable<any> {
    return Observable.create(observer => {
      this._http
        .get<IWord[]>('/api/words')
        .subscribe(
          response => {
            const words = response.map(word => new Word(word));
            this.mainArray = words.slice();
            this.fullArray = words.slice();
            observer.next();
          },
          errors => observer.error(errors)
        );
     }
  );
 }

  constructor(private _http: HttpClient) { }

}
