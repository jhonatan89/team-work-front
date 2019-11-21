import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getMondays() {
    let currentDate = new Date();
    let month = currentDate.getMonth();
    let mondays = [];
    
    currentDate.setDate(1);

    while (currentDate.getDay() !== 1) {
      currentDate.setDate(currentDate.getDate() + 1);
    }

    while (currentDate.getMonth() === month) {
        mondays.push(new Date(currentDate.getTime()));
        currentDate.setDate(currentDate.getDate() + 7);
    }

    return mondays;
}
}
