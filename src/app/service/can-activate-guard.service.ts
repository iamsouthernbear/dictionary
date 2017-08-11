import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WordsService } from './words.service';

@Injectable()
export class CanActivateGuardService implements CanActivate {

  constructor(private wordsService: WordsService, private router: Router) {}

  canActivate() {
    if (this.wordsService.isEnaugh()) {
      return true;
    } else {
      alert('Need more words!');
      this.router.navigate(['/new-word']);
      return false;
    };
  }
}
