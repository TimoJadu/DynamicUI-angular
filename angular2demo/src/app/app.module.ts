import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, HttpModule, HttpClientModule],
    declarations: [AppComponent, EmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
