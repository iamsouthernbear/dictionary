import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WordsComponent } from './components/words/words.component';
import { NewWordComponent } from './components/new-word/new-word.component';

import { WordsService } from './service/words.service';

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
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'words',
        component: WordsComponent
      },
      {
        path: 'new-word',
        component: NewWordComponent
      }
    ], {useHash: true})
  ],
  providers: [WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
