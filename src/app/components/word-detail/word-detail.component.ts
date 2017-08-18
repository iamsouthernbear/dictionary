import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../service/words.service';
import { Word } from '../../models/word';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {

  public word: Word;

  constructor(
    private _wordsService: WordsService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {}

  public goBack(): void {
    this._location.back();
  }

  public delWord() {
    return this._wordsService
             .deleteWord(this.word.id)
             .subscribe();
  }

  public upWord() {
    return this._wordsService
             .updateWord(this.word)
             .subscribe(
               result => console.log(result),
               error => console.log(error)
             );
  }

  ngOnInit() {
    this._route.paramMap
      .switchMap((params: ParamMap) => this._wordsService.getWord(params.get('id')))
      .subscribe(word => {
        this.word = new Word(word);
      });
  }
}
