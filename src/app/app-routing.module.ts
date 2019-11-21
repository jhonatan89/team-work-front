import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskBoardComponent } from './task-board/task-board.component';


const routes: Routes = [
  { path: '', redirectTo: '/task-board', pathMatch: 'full'},
  { path: 'task-board', component: TaskBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
