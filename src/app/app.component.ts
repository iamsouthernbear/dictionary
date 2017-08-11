import { Component, OnInit } from '@angular/core';
// import { Word } from './models/word';
// import { WordsService } from './service/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // 
  // private words: Word[] = [];
  //
  // constructor(private wordsService: WordsService) {}
  //
  // ngOnInit() {
  //   this.wordsService
  //     .getWords()
  //     .subscribe(
  //       response => this.words = response,
  //       error => console.log(error)
  //     );
  // }
}
