import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WordsComponent } from './components/words/words.component';
import { NewWordComponent } from './components/new-word/new-word.component';

import { WordsService } from './service/words.service';
import { CanActivateGuardService } from './service/can-activate-guard.service';
import { CanDeactivateGuardService } from './service/can-deactivate-guard.service';
import { TaskCanDeactivateGuardService } from './service/task-can-deactivate-guard.service';
import { TaskService } from './service/task.service';
import { FormComponent } from './components/form/form.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    WordsComponent,
    NewWordComponent,
    FormComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WordsService, TaskService, CanDeactivateGuardService,
              CanActivateGuardService, TaskCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
