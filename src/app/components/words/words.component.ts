import { Component, OnInit } from '@angular/core';
import { Word } from '../../models/word';
import { WordsService } from '../../service/words.service';


@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  public words: Word[] = [];

  constructor(private wordsService: WordsService) {}

  ngOnInit() {
    this.wordsService
      .getWords()
      .subscribe(
        response => this.words = response,
        error => console.log(error)
      );
  }
}
