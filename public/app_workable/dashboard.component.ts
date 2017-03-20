import {Component} from '@angular/core';
//import {MainNavComponent} from './mainnav';

@Component({
    selector:'dashboard-list',
    template:`
     
    <DIV class="framework-content-view">
<DIV class="framework-resize" id="resizeView"></DIV> 
<DIV class="heading-container">
<DIV class="heading">
<H2 id="contentTitle">My Dashboard</H2>
<DIV class="sub-nav">

   <div class="slb-search-field expanding"><input name="partial-block" type="search" placeholder="" class="placeholder-shown"> 
                      
<div class="slb-icon"><svg xmlns="http://www.w3.org/2000/svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>                         </svg>                      
 </div></div>
   <button class="slb-button icon-only">
<div class="slb-icon"><svg xmlns="http://www.w3.org/2000/svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-filter"></use>                       </svg>                     
</div><span class="text">Filter</span>                     </button>             
 </DIV></DIV></DIV>

<DIV class="slb-dashboard" style="width:1166px;">

<DIV class="view-container" style="overflow:auto;">
    <div  style="margin-left: 40px; display : none;" id="recentDocTitle"> <H3>My Recent Documents</H3></div>
<DIV class="view" id="imagesList" >
   
<DIV class="slb-card">
<DIV class="card-container">
<DIV class="slb-card-content">
<DIV class="slb-progress-indicator "><img src="images/workflow.jpg" style="width:200px" (click)= "getimageData();">               

<DIV class="meta"><SPAN class="type">Seismic Flow Test 1</SPAN>           
                </DIV></DIV></DIV></DIV></DIV>
<DIV class="slb-card">
<DIV class="card-container">

<DIV class="slb-card-content">
<DIV class="slb-progress-indicator "><img src="images/workflow.jpg" (click)= "getimageData();" style="width:200px">      

<DIV class="meta"><SPAN class="type">Seismic Flow Test 2</SPAN>         
                </DIV></DIV></DIV></DIV></DIV>
<DIV class="slb-card">
<DIV class="card-container">

<DIV class="slb-card-content">
<DIV class="slb-progress-indicator "><img src="images/workflow.jpg" (click)= "getimageData();" style="width:200px">    
          
<DIV class="meta"><SPAN class="type">Seismic Flow Test 3</SPAN>       
              </DIV></DIV></DIV></DIV></DIV>
<DIV class="slb-card">
<DIV class="card-container">

<DIV class="slb-card-content">
<DIV class="slb-progress-indicator "><img src="images/workflow.jpg"  (click)= "getimageData();" style="width:200px">     

<DIV class="meta"><SPAN class="type">Seismic Flow Test 4</SPAN>                   
                </DIV></DIV></DIV></DIV></DIV>

</DIV>


<!-- <DIV class="add-card"><A class="add-new" href="https://blue-dls.appspot.com/components/dashboard/#">
<DIV class="slb-icon"><svg xmlns="http://www.w3.org/2000/svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" 
xlink:href="#icon-add-2x" />                   </svg>                 
</DIV><SPAN>Add New</SPAN>               </A>             </DIV> -->


 
<jobList-list></jobList-list>

</DIV></DIV>

</DIV>
`
})
export class DashboardComponent{}