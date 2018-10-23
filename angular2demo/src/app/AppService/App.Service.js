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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var AppService = /** @class */ (function () {
    //getEmployees(): IEmployee[] {
    //    return [
    //        { template: 'text', lebel: 'Name', name: 'employeeName', id: 'd27596e2-a7ba-4826-af33-41bb58df6275', value: 'John Smith' },
    //        { template: 'eldate', lebel: 'Birthday', name: 'employeeBirthday', id: 'd27596e2-a7ba-4826-af33-41bb58df1111', value: '1970-01-01' },
    //        { template: 'command', id: 'd27596e2-a7ba-4826-af33-41bb58df6266', text: 'Update' }
    //    ];
    //}
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getEmployees = function () {
        return this.http.get('../src/app/configuration.json')
            .map(function (resp) { return resp.json(); });
    };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=App.Service.js.map