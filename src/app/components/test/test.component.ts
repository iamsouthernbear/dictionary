import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Word } from '../../models/word';
import { Task } from '../../models/task';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public rightAnswer: number = 0;
  public isEnd: boolean = false;

  public task: Task;

  public newTask(word?: Word): void {
    if (word.id === this.task.currentWord.id) {
      this.rightAnswer++;
    };
    if (this._taskService.mainArray.length === 0) {
      this.isEnd = true;
      return;
    };
    this.task = new Task(this._taskService.newTask());
  }

  public newTest(): void {
    this._taskService.updateList().subscribe(() =>
      this.task = new Task(this._taskService.newTask()));
    this.isEnd = false;
    this.rightAnswer = 0;
  }


  constructor(private _taskService: TaskService) {}

  ngOnInit() {
    this._taskService.updateList().subscribe(() =>
      this.task = new Task(this._taskService.newTask()));
  }
}
