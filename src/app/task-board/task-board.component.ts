import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { TaskBoardService } from './task-board.service';
import { forkJoin, concat, Observable } from 'rxjs';
import { TaskBoardModel } from './task-board.model';
import Swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  
  projects: any[] = [];
  selectedProject: any;
  mondays: Date[] = [];
  selectedDate: Date;
  summaryTasks: TaskBoardModel[];
  constructor(private sharedService: SharedService, private taskBoardService: TaskBoardService) { }

  ngOnInit() {
    this.selectedDate = new Date();
    this.getMonthIntervalDates(this.selectedDate);
    this.getProjects();
  }

  showTasksByProject(projectid?: any){
    if(projectid){
      this.selectedProject = this.projects.find((prj)=> prj.id === Number(projectid));
    }
    this.summaryTasks = [];
    let countSubscribes = 0;
    let subscribers: Observable<any>[] = [];
    this.mondays.forEach((monday)=>{
        let endDate = new Date(monday);
        endDate.setDate(endDate.getDate() + 6);
        subscribers.push(this.taskBoardService.getTaskByDates({startDate: monday, endDate: endDate, projectId: this.selectedProject.id}));
    });
    concat(...subscribers).subscribe(taskByWeek =>{
      this.summaryTasks.push(new TaskBoardModel(taskByWeek, this.mondays[countSubscribes]));
      countSubscribes++;
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error en el servidor'
      })
    },
    () => {
      countSubscribes = 0;
    }
    );
  }

  getMonthIntervalDates(date?: Date){
    this.mondays = this.sharedService.getMondays(date);
    console.log("Mondays", this.mondays);
  }

  getProjects(){
    this.taskBoardService.getProjects().subscribe((projects:any[])=>{
      this.projects = projects;
    });
  }

  setNewDate(){
    this.getMonthIntervalDates(this.selectedDate);
    this.showTasksByProject();
  }

}
