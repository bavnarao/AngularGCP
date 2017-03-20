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
var ViewerComponent = (function () {
    function ViewerComponent() {
    }
    ViewerComponent = __decorate([
        core_1.Component({
            selector: 'viewer-list',
            template: "<DIV class=\"framework-content-view\">\n\n<DIV class=\"heading-container\">\n<DIV class=\"heading\">\n<H2 id=\"contentTitle\">Viewer</H2>\n<DIV class=\"sub-nav\">\n\n   <BUTTON class=\"slb-button icon-only\">                   \n<DIV class=\"slb-icon\"> <span style=\"font-size:25px;\" class=\"glyphicon glyphicon-search\"></span>                    \n </DIV></BUTTON>\n <BUTTON class=\"slb-button icon-only\">\n<DIV class=\"slb-icon\">     <span style=\"font-size:25px;\" class=\"glyphicon glyphicon-tasks\"></span>               \n</DIV><SPAN class=\"text\">Filter</SPAN>                     </BUTTON>             \n </DIV></DIV></DIV>\n\n<DIV class=\"slb-dashboard\">\n\n<DIV class=\"view-container\" style=\"width:1200px;\">\n\n</DIV>\n</DIV>"
        }), 
        __metadata('design:paramtypes', [])
    ], ViewerComponent);
    return ViewerComponent;
}());
exports.ViewerComponent = ViewerComponent;
//# sourceMappingURL=viewer.component.js.map