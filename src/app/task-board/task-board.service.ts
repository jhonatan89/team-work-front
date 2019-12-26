import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class TaskBoardService {

  constructor(private http: HttpClient, private sharedService : SharedService) { }

  getTaskByDates(searchParams?: any){
    if(searchParams){
      searchParams.startDate = this.sharedService.getDateNormalized(searchParams.startDate);
      searchParams.endDate = this.sharedService.getDateNormalized(searchParams.endDate);
    }
    return this.http.get("http://localhost:3000/core/tasks", { params: searchParams});
  }

  getProjects(){
    return this.http.get("http://localhost:3000/core/projects");
  }

}
