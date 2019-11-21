import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getSummaryTaskByDates(searchParams?: any){
    return this.http.get("http://localhost:3000/core/tasks", { params: searchParams});
  }

}
