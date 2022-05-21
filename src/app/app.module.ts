// Modules declarations go here
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularEmojisModule} from 'angular-emojis';
//Services decalrations go here
import { DataService } from './src/app/services/data.service';

//Components declarations go here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskFunctionsComponent } from './components/tasks/task-functions/task-functions.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { FooterComponent } from './src/app/components/footer/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { AdminComponent } from './modules/components/admin/admin.component';
import { FulfilledComponent } from './components/tasks/fulfilled/fulfilled.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TasksComponent,
    TaskFunctionsComponent,
    TaskAddComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
    LoginContainerComponent,
    AdminComponent,
    FulfilledComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularEmojisModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),

    /*RouterModule.forRoot([
    ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
