import { Component, OnInit } from '@angular/core';
import { Word } from '../../models/word';
import { WordsService } from '../../service/words.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private wordsService: WordsService) {}

  public newWord: Word = new Word();

  addWord() {
    return this.wordsService
           .postWord(this.newWord)
           .subscribe()
  }
}
