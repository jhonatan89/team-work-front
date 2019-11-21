import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  
  projects: any[] = [{id: 1, name: "Project 1"},{id: 2, name: "Project 2"}];
  mondays: Date[] = [];
  summaryTasks: any[];
  constructor(private sharedService: SharedService, private taskService: TaskService) { }

  ngOnInit() {
    this.getMonthIntervalDates();
  }

  showSummaryTasksByProject(id: any){
    this.summaryTasks = [];
    this.mondays.forEach((monday)=>{
        this.taskService.getSummaryTaskByDates({startDate: monday}).subscribe((summary)=>{
          this.summaryTasks.push(summary);
        })
    });
  }

  getMonthIntervalDates(){
    this.mondays = this.sharedService.getMondays();
  }

}
