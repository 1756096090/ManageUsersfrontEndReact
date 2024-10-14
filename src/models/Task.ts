export interface Task {
    ID: string;
    Name: string;
    Description: string;
    ID_Project: string;
    ID_Employee: string;
    StartDate: Date;
    EndDate: Date;
    IsCompleted: boolean;
}
