"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
    }
    EmployeeComponent.prototype.getNumberofEmployees = function () {
        if (this._employees.length > 0) {
            this._htmlElement = this.createHTMLElements(this._employees[0]);
        }
        return this._htmlElement;
    };
    EmployeeComponent.prototype.createHTMLElements = function (element) {
        if (element.lebel == 'Name') {
            this.tag = '<input name="' + element.name + '" id="' + element.id + '" />';
        }
        if (element.lebel == 'Birthday') {
            this.tag = '<input name="' + element.name + '" id="' + element.id + '" />';
        }
        return this.tag;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], EmployeeComponent.prototype, "_employees", void 0);
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-employee',
            templateUrl: 'app/employee/employee.component.html',
            styleUrls: ['app/employee/employee.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.Default
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map