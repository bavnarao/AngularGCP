import {Component} from '@angular/core';
import {MaterialService} from "./material.service";
import {Material} from "./material";
import {Http} from "@angular/http";
import {Router} from '@angular/router';
/// <reference path="../jquery.d.ts"/>

@Component({
    selector:'jobList-list',
    providers: [MaterialService],
    template: `
    
   <DIV class="info" id="jobsTable">
<DIV class="slb-table">
<DIV class="slb-table-heading">
<H2>My Job List</H2><BUTTON class="slb-button icon-only">
<DIV class="slb-icon"><svg xmlns="http://www.w3.org/2000/svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" 
xlink:href="#icon-add" />                    </svg>                  
</DIV></BUTTON>                 </DIV>

 <div id="menu2" class="tab-pane fade in active slb-table-container">
    <br/><br/>
    <div class="slb-table-container">
            <!-- <h3>My Job List</h3> -->
        <table class="table table-striped table-bordered table-responsive table-condensed table-hover" id="exmaple">
            <thead>
                <tr>
<th >Job ID<span class="caret"></span></th>
<th style="background-color:#F4F5F9;color:#555452;font-size:15px;">Flow ID<span class="caret"></span></th>
<th style="background-color:#F4F5F9;color:#555452;font-size:15px;">Flow Name<span class="caret"></span></th>
<th style="background-color:#F4F5F9;color:#555452;font-size:15px;">Progress<span class="caret"></span></th>
<th style="background-color:#F4F5F9;color:#555452;font-size:15px;">Status<span class="caret"></span></th>
<th style="background-color:#F4F5F9;color:#555452;font-size:15px;">Date Submitted<span class="caret"></span></th>
<th style="background-color:#F4F5F9;color:#555452;font-size:15px;">Submitted By<span class="caret"></span></th>
<th style="background-color:#F4F5F9;color:#555452;font-size:15px;">Last Updated<span class="caret"></span></th>
<th style="background-color:#F4F5F9;color:#555452;font-size:15px;">Actions<span class="caret"></span></th>
                </tr>
                </thead>
                <tbody *ngFor='let item of (materials | search : searchText)' id="display">
                    <tr>
                    <td style="background-color:#Ffffff;color:#555452;font-size:12px;" class="item">{{item.mid}}</td>
                    <td style="background-color:#Ffffff;color:#555452;font-size:12px;" class="item">{{item.toq}}</td>
                    <td style="background-color:#Ffffff;color:#555452;font-size:12px;" class="item">{{item.mname}}</td>
                    <td style="background-color:#Ffffff;color:#555452;font-size:12px;" class="item">{{item.toq}}</td>
                    <td style="background-color:#Ffffff;color:#555452;font-size:12px;" class="item">{{item.status}}</td>
                    <td style="background-color:#Ffffff;color:#555452;font-size:12px;" class="item">{{item.tsq}}</td>
                    <td style="background-color:#Ffffff;color:#555452;font-size:12px;" class="item">{{item.uom}}</td>
                    <td style="background-color:#Ffffff;color:#555452;font-size:12px;" class="item">{{item.tsq}}</td>
                    <td style="background-color:#Ffffff;color:#555452;font-size:15px;"><img src="images/comment.png" onclick="document.getElementById('cmt').src='/images/comment1.png'" id="cmt">&nbsp;&nbsp;</td>
                    </tr>
    
                </tbody>

            </table>
          
           <div>
              
            </div>      
                   <br/> 
                   <div style="top:670px;right:10px;position:absolute;">
                         
               <br/> <br/>
                     </div>  
                       <br/> <br/>
    
         
            
  </div>
  
        </div>

 


</DIV></DIV>
    `
})

export class JobListComponent{
    materials: Material[];
    errorMessage: string;
    searchText: string = "";
    public data: any[];
    
    constructor(private service: MaterialService,private http: Http, private router:Router) {
        //this.materials = new Array<Material>();
    }

  ngOnInit() {
      this.service.getMaterials().subscribe(
            data => this.materials = data,
            error => this.errorMessage = <any>error
        );
    }
    public remove(item:any) {
        let index = this.data.indexOf(item);
        if(index>-1) {
            this.data.splice(index, 1);
        }
    }

    public view(item:any) {
		this.router.navigate(['/jobdetails']);
        localStorage.setItem("Data", JSON.stringify(item));
		//window.open("http://google.com", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
          //alert(" The details are Flow Name : "+ item.mname +"  and Submitted By : "+ item.uom);
    }
}