import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordsComponent } from './components/words/words.component';
import { NewWordComponent } from './components/new-word/new-word.component';

const routes = [
  {
    path: 'words',
    component: WordsComponent
  },
  {
    path: 'new-word',
    component: NewWordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
