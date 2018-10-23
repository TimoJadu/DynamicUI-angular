import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { IEmployeeElements } from '../AppService/IEmployeeElements';
import { AppComponent } from '../app.component'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
})

export class EmployeeComponent {    

    @Input()
    _employees: IEmployeeElements[];    

    _template: string;
    _lebel: string;
    _name: string;
    _id: string;
    _value: string;   
    _htmlElement: string;
    tag: string;

    getNumberofEmployees(): string {
        
        if (this._employees.length > 0) {
            this._htmlElement= this.createHTMLElements(this._employees[0]);
        }        

        return this._htmlElement;
    }

    createHTMLElements(element: IEmployeeElements): string {
        

        if (element.lebel == 'Name')
        {
            this.tag = '<input name="' + element.name + '" id="' + element.id + '" />';
        }
        if (element.lebel == 'Birthday') {
            this.tag = '<input name="' + element.name + '" id="' + element.id + '" />';
        }
        return this.tag;

    }

    
}