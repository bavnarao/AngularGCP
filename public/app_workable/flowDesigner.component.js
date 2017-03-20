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
var FlowDesignerComponent = (function () {
    function FlowDesignerComponent() {
    }
    FlowDesignerComponent = __decorate([
        core_1.Component({
            selector: 'flowDesigner-list',
            template: "\n    <DIV class=\"framework-content-view\">\n<!-- <DIV class=\"framework-resize\" id=\"resizeView\"></DIV> -->\n<DIV class=\"heading-container\">\n<DIV class=\"heading\">\n<H2 id=\"contentTitle\">Flow Designer</H2>\n<DIV class=\"sub-nav\">\n\n   <BUTTON class=\"slb-button icon-only\">                   \n<DIV class=\"slb-icon\"> <span style=\"font-size:25px;\" class=\"glyphicon glyphicon-search\"></span>                    \n </DIV></BUTTON><BUTTON class=\"slb-button icon-only\">\n<DIV class=\"slb-icon\">     <span style=\"font-size:25px;\" class=\"glyphicon glyphicon-tasks\"></span>               \n</DIV><SPAN class=\"text\">Filter</SPAN>                     </BUTTON>             \n </DIV></DIV></DIV>\n\n<DIV class=\"slb-dashboard\">\n\n<DIV class=\"view-container\" style=\"width:1200px;\">\n    <div  style=\"margin-left: 40px; display : none;\" id=\"recentDocTitle\"> <H3>My Recent Documents</H3></div>\n<DIV class=\"view\" id=\"imagesList\" >\n   \n<DIV class=\"slb-card\">\n<DIV class=\"card-container\">\n<DIV class=\"slb-card-content\">\n<DIV class=\"slb-progress-indicator \"><img src=\"images/workflow.jpg\" style=\"width:200px\" (click)= \"getimageData();\">               \n\n<DIV class=\"meta\"><SPAN class=\"type\">Seismic Flow Test 1</SPAN>           \n                </DIV></DIV></DIV></DIV></DIV>\n<DIV class=\"slb-card\">\n<DIV class=\"card-container\">\n\n<DIV class=\"slb-card-content\">\n<DIV class=\"slb-progress-indicator \"><img src=\"images/workflow.jpg\" (click)= \"getimageData();\" style=\"width:200px\">      \n\n<DIV class=\"meta\"><SPAN class=\"type\">Seismic Flow Test 2</SPAN>         \n                </DIV></DIV></DIV></DIV></DIV>\n<DIV class=\"slb-card\">\n<DIV class=\"card-container\">\n\n<DIV class=\"slb-card-content\">\n<DIV class=\"slb-progress-indicator \"><img src=\"images/workflow.jpg\" (click)= \"getimageData();\" style=\"width:200px\">    \n          \n<DIV class=\"meta\"><SPAN class=\"type\">Seismic Flow Test 3</SPAN>       \n              </DIV></DIV></DIV></DIV></DIV>\n<DIV class=\"slb-card\">\n<DIV class=\"card-container\">\n\n<DIV class=\"slb-card-content\">\n<DIV class=\"slb-progress-indicator \"><img src=\"images/workflow.jpg\"  (click)= \"getimageData();\" style=\"width:200px\">     \n\n<DIV class=\"meta\"><SPAN class=\"type\">Seismic Flow Test 4</SPAN>                   \n                </DIV></DIV></DIV></DIV></DIV>\n\n</DIV>\n\n\n<!-- <DIV class=\"add-card\"><A class=\"add-new\" href=\"https://blue-dls.appspot.com/components/dashboard/#\">\n<DIV class=\"slb-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" \nxlink:href=\"#icon-add-2x\" />                   </svg>                 \n</DIV><SPAN>Add New</SPAN>               </A>             </DIV> -->\n\n\n \n\n\n</DIV></DIV>\n</DIV>"
        }), 
        __metadata('design:paramtypes', [])
    ], FlowDesignerComponent);
    return FlowDesignerComponent;
}());
exports.FlowDesignerComponent = FlowDesignerComponent;
//# sourceMappingURL=flowDesigner.component.js.map