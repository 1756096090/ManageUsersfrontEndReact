export interface TaskGet {
    ID: string;
    Name: string;
    Description: string;
    EmployeeName: string;
    ProjectName: string;
    StartDate: Date;
    EndDate: Date;
    IsCompleted: boolean;
}