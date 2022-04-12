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
import { UserComponent } from './user/user.component';
import { DescriptionComponent } from './description/description.component';
import { SignupContainerComponent } from './signup-container/signup-container.component';
import { LoginContainerComponent } from './login-container/login-container.component';

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
    UserComponent,
    DescriptionComponent,
    SignupContainerComponent,
    LoginContainerComponent,
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
<<<<<<< Updated upstream
=======
      {path: 'login', component: LoginComponent},
      {path: '**', component: NotfoundComponent},
      {path: 'signup', component: SignupComponent},
>>>>>>> Stashed changes
      {path: 'login', component: LoginContainerComponent},
      {path: 'signup', component: SignupContainerComponent},
      {path: 'tasks', component: TasksComponent},
      {path: 'description', component: DescriptionComponent},
      {path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
