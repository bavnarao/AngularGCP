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
var material_service_1 = require("./material.service");
var JobListComponent = (function () {
    function JobListComponent(service) {
        this.service = service;
        this.searchText = "";
        //this.materials = new Array<Material>();
    }
    JobListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMaterials().subscribe(function (data) { return _this.materials = data; }, function (error) { return _this.errorMessage = error; });
    };
    JobListComponent = __decorate([
        core_1.Component({
            selector: 'jobList-list',
            providers: [material_service_1.MaterialService],
            template: "\n    \n   <DIV class=\"info\" id=\"jobsTable\">\n<DIV class=\"slb-table\">\n<DIV class=\"slb-table-heading\">\n<H2>My Job List</H2><BUTTON class=\"slb-button icon-only\">\n<DIV class=\"slb-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" \nxlink:href=\"#icon-add\" />                    </svg>                  \n</DIV></BUTTON>                 </DIV>\n\n <div id=\"menu2\" class=\"tab-pane fade in active slb-table-container\">\n    <br/><br/>\n    <div class=\"slb-table-container\">\n            <!-- <h3>My Job List</h3> -->\n        <table class=\"table table-striped table-bordered table-responsive table-condensed table-hover\" id=\"exmaple\">\n            <thead>\n                <tr>\n<th >Job ID<span class=\"caret\"></span></th>\n<th style=\"background-color:#F4F5F9;color:#555452;font-size:15px;\">Flow ID<span class=\"caret\"></span></th>\n<th style=\"background-color:#F4F5F9;color:#555452;font-size:15px;\">Flow Name<span class=\"caret\"></span></th>\n<th style=\"background-color:#F4F5F9;color:#555452;font-size:15px;\">Progress<span class=\"caret\"></span></th>\n<th style=\"background-color:#F4F5F9;color:#555452;font-size:15px;\">Status<span class=\"caret\"></span></th>\n<th style=\"background-color:#F4F5F9;color:#555452;font-size:15px;\">Date Submitted<span class=\"caret\"></span></th>\n<th style=\"background-color:#F4F5F9;color:#555452;font-size:15px;\">Submitted By<span class=\"caret\"></span></th>\n<th style=\"background-color:#F4F5F9;color:#555452;font-size:15px;\">Last Updated<span class=\"caret\"></span></th>\n<th style=\"background-color:#F4F5F9;color:#555452;font-size:15px;\">Actions<span class=\"caret\"></span></th>\n                </tr>\n                </thead>\n                <tbody *ngFor='let item of (materials | search : searchText)' id=\"display\">\n                    <tr>\n                    <td style=\"background-color:#Ffffff;color:#555452;font-size:12px;\" class=\"item\">{{item.mid}}</td>\n                    <td style=\"background-color:#Ffffff;color:#555452;font-size:12px;\" class=\"item\">{{item.toq}}</td>\n                    <td style=\"background-color:#Ffffff;color:#555452;font-size:12px;\" class=\"item\">{{item.mname}}</td>\n                    <td style=\"background-color:#Ffffff;color:#555452;font-size:12px;\" class=\"item\">{{item.toq}}</td>\n                    <td style=\"background-color:#Ffffff;color:#555452;font-size:12px;\" class=\"item\">{{item.status}}</td>\n                    <td style=\"background-color:#Ffffff;color:#555452;font-size:12px;\" class=\"item\">{{item.tsq}}</td>\n                    <td style=\"background-color:#Ffffff;color:#555452;font-size:12px;\" class=\"item\">{{item.uom}}</td>\n                    <td style=\"background-color:#Ffffff;color:#555452;font-size:12px;\" class=\"item\">{{item.tsq}}</td>\n                    <td style=\"background-color:#Ffffff;color:#555452;font-size:15px;\"><img src=\"images/comment.png\" onclick=\"document.getElementById('cmt').src='/images/comment1.png'\" id=\"cmt\">&nbsp;&nbsp;</td>\n                    </tr>\n    \n                </tbody>\n\n            </table>\n          \n           <div>\n              \n            </div>      \n                   <br/> \n                   <div style=\"top:670px;right:10px;position:absolute;\">\n                         \n               <br/> <br/>\n                     </div>  \n                       <br/> <br/>\n    \n         \n            \n  </div>\n  \n        </div>\n\n \n\n\n</DIV></DIV>\n    "
        }), 
        __metadata('design:paramtypes', [material_service_1.MaterialService])
    ], JobListComponent);
    return JobListComponent;
}());
exports.JobListComponent = JobListComponent;
//# sourceMappingURL=jobList.component.js.map