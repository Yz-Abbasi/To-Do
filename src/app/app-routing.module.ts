import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { DescriptionComponent } from './description/description.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupContainerComponent } from './signup-container/signup-container.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginContainerComponent},
  {path: 'signup', component: SignupContainerComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  /*
  {path: 'home', component: HomeComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'description', component: DescriptionComponent}, */
  {path: 'admin', canActivate: [AuthGuard] ,loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
