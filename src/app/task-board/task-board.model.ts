export class TaskBoardModel{
    startDate: Date;
    endDate: Date;
    estimatedTasks: number = 0;
    loggedTasks: number;
    totalTasks: number;
    tasks: any[];

    constructor(tasks: any[], startDate: Date){
        this.tasks = tasks;
        this.startDate = startDate;
        this.endDate = new Date(this.startDate);
        this.endDate.setDate(this.endDate.getDate() + 6);
        this.totalTasks = this.getTotalTasks(tasks);
        this.estimatedTasks = this.getNumberEstimatedTasks(tasks);
        this.loggedTasks = this.getNumberLoggedTasks(tasks);
    }


    getNumberEstimatedTasks(tasks: any[]){
        let estimatedTasks: number = 0;
        tasks.forEach((task)=>{
            if(task.estimatedMinutes){
                estimatedTasks++;
            }
        });

        return estimatedTasks;
    }

    getNumberLoggedTasks(tasks: any[]){
        let loggedTasks: number = 0;
        tasks.forEach((task)=>{
            if(task.timeIsLogged === "1"){
                loggedTasks++;
            }
        });

        return loggedTasks;
    }

    getTotalTasks(tasks: any[]){
        return tasks.length || 0;
    }

}