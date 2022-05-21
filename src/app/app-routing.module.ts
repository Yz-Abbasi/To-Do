import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './_helpers/auth.guard';

const ROUTES: Routes = [
  {path: 'login', component: LoginContainerComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'admin', canActivate: [AuthGuard] ,loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
