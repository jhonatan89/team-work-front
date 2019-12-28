import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getMondays(date?: Date) {
    let currentDate: Date;

    date ? currentDate = new Date(date) : currentDate = new Date();
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

getDateNormalized(date: Date){
  let dateNormalized;
  if(date){
    dateNormalized = date.toLocaleDateString("es-US",{year: 'numeric', month: '2-digit', day: '2-digit'});
    dateNormalized = dateNormalized.replace(/\//g, "");
    return `${dateNormalized.substring(4)}${dateNormalized.substring(2,4)}${dateNormalized.substring(0,2)}`

  }else{
    return dateNormalized;
  }
}
}
