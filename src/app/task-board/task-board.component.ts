import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { TaskBoardService } from './task-board.service';
import { forkJoin, concat, Observable } from 'rxjs';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  
  projects: any[] = [];
  mondays: Date[] = [];
  summaryTasks: any[];
  constructor(private sharedService: SharedService, private taskBoardService: TaskBoardService) { }

  ngOnInit() {
    this.getMonthIntervalDates();
    this.getProjects();
  }

  showTasksByProject(id: any){
    this.summaryTasks = [];
    let subscribers: Observable<any>[] = [];
    this.mondays.forEach((monday)=>{
        let endDate = new Date(monday);
        endDate.setDate(endDate.getDate() + 6);
        subscribers.push(this.taskBoardService.getTaskByDates({startDate: monday, endDate: endDate, projectId: id}));
    });
    concat(subscribers).subscribe(taskByWeek =>{
      this.summaryTasks.push(taskByWeek);
    });
  }

  getMonthIntervalDates(){
    this.mondays = this.sharedService.getMondays();
    console.log("Mondays", this.mondays);
  }

  getProjects(){
    this.taskBoardService.getProjects().subscribe((projects:any[])=>{
      this.projects = projects;
    });
  }

}
