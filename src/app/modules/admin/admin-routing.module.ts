import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { TasksComponent } from 'src/app/components/tasks/tasks.component';
import { DescriptionComponent } from 'src/app/description/description.component';
import { AdminComponent } from '../components/admin/admin.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'tasks', component: TasksComponent},
    {path: 'description', component: DescriptionComponent},
    {path: '', redirectTo: '/admin/home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
