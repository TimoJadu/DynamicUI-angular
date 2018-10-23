import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IEmployeeElements } from './IEmployeeElements';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService {
    //getEmployees(): IEmployee[] {
    //    return [
    //        { template: 'text', lebel: 'Name', name: 'employeeName', id: 'd27596e2-a7ba-4826-af33-41bb58df6275', value: 'John Smith' },
    //        { template: 'eldate', lebel: 'Birthday', name: 'employeeBirthday', id: 'd27596e2-a7ba-4826-af33-41bb58df1111', value: '1970-01-01' },
    //        { template: 'command', id: 'd27596e2-a7ba-4826-af33-41bb58df6266', text: 'Update' }
    //    ];
    //}

    constructor(private http: Http) {

    }
    getEmployees(): Observable<IEmployeeElements[]> {
        return this.http.get('../src/app/configuration.json')
            .map((resp: Response) => <IEmployeeElements[]>resp.json());
    }
}

