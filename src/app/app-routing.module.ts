import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompletedTaskComponent } from './tasks/completed-task/completed-task.component';
import { PendingTaskComponent } from './tasks/pending-task/pending-task.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  {path: 'Home', component: DashboardComponent },
  {path: 'About', component: AboutComponent },
  {path: 'Tasks', component: TasksComponent },
  {path: 'Pending', component: PendingTaskComponent },
  {path: 'Completed', component: CompletedTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
