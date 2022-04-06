import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AddComponent } from './components/button/add/add.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskFunctionsComponent } from './components/tasks/task-functions/task-functions.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { FooterComponent } from './src/app/components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AddComponent,
    TasksComponent,
    TaskFunctionsComponent,
    TaskAddComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
