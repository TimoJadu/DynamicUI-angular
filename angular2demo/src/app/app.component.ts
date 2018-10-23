import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from './AppService/App.Service';
import { IEmployeeElements } from './AppService/IEmployeeElements';


@Component({
  selector: 'my-app',    
    templateUrl: 'app/app.component.html',
    providers: [AppService],
    changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit{
    pageHeader: string = 'Employee Form';
    

    employees: IEmployeeElements[];
    constructor(private _serviceResponse: AppService) {

    }
    ngOnInit() {
        this._serviceResponse.getEmployees()
                                .subscribe(data => this.employees = data);

        console.log("subha");
        console.log(this.employees);  
    }

    bindElementwithController(): IEmployeeElements[] {
        return this.employees;
    }
}
