export interface IEmployeeElements { 
    template: string;
    lebel?: string;    
    name?: string;
    id: string;
    value?: string;   
    text?: string; 
}

export interface IConfig {
    title: string;
    id: string;
    elements: IEmployeeElements;
}
