import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AddComponent } from './components/button/add/add.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskFunctionsComponent } from './components/tasks/task-functions/task-functions.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { FooterComponent } from './src/app/components/footer/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AddComponent,
    TasksComponent,
    TaskFunctionsComponent,
    TaskAddComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: '**', component: NotfoundComponent},
      {path: 'signup', component: SignupComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
