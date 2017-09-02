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

  public rightAnswer = 0;
  public isEnd = false;

  public task: Task;

  constructor(public taskService: TaskService) {}

  public newTask(word?: Word): void {
    if (word.id === this.task.currentWord.id) {
      this.rightAnswer++;
    }
    if (this.taskService.mainArray.length === 0) {
      this.isEnd = true;
      return;
    }
    this.task = new Task(this.taskService.newTask());
  }

  public newTest(): void {
    this.taskService.updateList().subscribe(() =>
      this.task = new Task(this.taskService.newTask()));
    this.isEnd = false;
    this.rightAnswer = 0;
  }

  ngOnInit() {
    this.taskService.updateList().subscribe(() =>
      this.task = new Task(this.taskService.newTask()));
  }
}
