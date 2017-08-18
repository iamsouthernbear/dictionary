import { Component } from '@angular/core';
import { Word } from '../../models/word';
import { WordsService } from '../../service/words.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private _wordsService: WordsService) {}

  public newWord: Word = new Word();

  addWord() {
    return this._wordsService
           .postWord(this.newWord)
           .subscribe();
  }
}
