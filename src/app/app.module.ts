import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WordsComponent } from './components/words/words.component';
import { NewWordComponent } from './components/new-word/new-word.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    WordsComponent,
    NewWordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'words',
        component: WordsComponent
      },
      {
        path: 'new-word',
        component: NewWordComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
