import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordsComponent } from './components/words/words.component';
import { NewWordComponent } from './components/new-word/new-word.component';
import { TestComponent } from './components/test/test.component';
import { CanActivateGuardService } from './service/can-activate-guard.service';
import { CanDeactivateGuardService } from './service/can-deactivate-guard.service';

const routes = [
  {
    path: 'words',
    component: WordsComponent
  },
  {
    path: 'new-word',
    component: NewWordComponent,
    canDeactivate: [CanDeactivateGuardService]
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [CanActivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
