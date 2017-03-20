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
var core_1 = require('@angular/core');
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar',
            template: "\n\n\n\n\n<DIV class=\"framework-side-nav\">\n    \n<NAV>\n    \n<A class=\"framework-nav-item\" \nrouterLink=\"/dashboard\" routerLinkActive=\"active\">\n<DIV class=\"slb-icon\"><span style=\"font-size:25px;\" class=\"glyphicon glyphicon-dashboard\"></span>               \n</DIV><br/>  <SPAN>Dashboard</SPAN>               </A>               \n\n<A class=\"framework-nav-item\" \nrouterLink=\"/seismicdrive\" routerLinkActive=\"active\">\n<DIV class=\"slb-icon\"><span style=\"font-size:25px;\" class=\"glyphicon glyphicon-cloud\"></span>               \n</DIV><br/><SPAN>Seismic Drive</SPAN>               </A>               \n\n<A class=\"framework-nav-item \" \nrouterLink=\"/flowdesigner\" routerLinkActive=\"active\">\n<DIV class=\"slb-icon\"><span style=\"font-size:25px;\" class=\"glyphicon glyphicon-object-align-vertical\"></span>               \n</DIV><br/><SPAN>Flow Designer</SPAN>               </A>             \n\n<A class=\"framework-nav-item \" \nrouterLink=\"/joblist\" routerLinkActive=\"active\">\n<DIV class=\"slb-icon\"><span style=\"font-size:25px;\" class=\"glyphicon glyphicon-list-alt\"></span>               \n</DIV><br/><SPAN>Job List</SPAN>               </A>              \n\n <A class=\"framework-nav-item \" \nrouterLink=\"/viewer\" routerLinkActive=\"active\">\n<DIV class=\"slb-icon\"><span style=\"font-size:25px;\" class=\"glyphicon glyphicon-th-list\"></span>               \n</DIV><br/><SPAN>Viewer</SPAN>               </A>   \n\n </NAV>\n\n</DIV>\n\n"
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.js.map