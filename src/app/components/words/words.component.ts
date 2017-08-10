import { Component, OnInit } from '@angular/core';
import * as data from '../../mock/dataBase.json';
import { Word } from '../../word';


@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent {

  mockData: Word[] = data['words'];

}
