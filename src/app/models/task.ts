import { Word } from './word';

export class Task {
  currentWord: Word;
  wordsList: Word[];

  constructor(task?: Task) {
    if (task) {
      Object.assign(this, task);
    }
  }
}
