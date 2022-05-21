import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { TasksComponent } from 'src/app/components/tasks/tasks.component';
import { AdminComponent } from '../components/admin/admin.component';

const ROUTES: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'tasks', component: TasksComponent},
    {path: '', redirectTo: '/admin/home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
