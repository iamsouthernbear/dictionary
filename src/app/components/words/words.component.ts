import { Component, OnInit } from '@angular/core';
import * as data from '../../mock/dataBase.json';
import { Word } from '../../word';
import { WordsService } from '../../service/words.service';


@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  mockData: Word[] = [];

  constructor(private wordsService: WordsService) {}

  // mockData: Word[] = data['words'];

  ngOnInit() {
    this.wordsService.getWords().subscribe(response => this.mockData = response,
    error => console.log(error));
  }

}
