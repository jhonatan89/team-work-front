export interface TaskBoardModel{
    startDate: Date;
    endDate: Date;
    estimatedTasks: number;
    loggedTasks: number;
    totalTasks: number;
    tasks: any[];
}