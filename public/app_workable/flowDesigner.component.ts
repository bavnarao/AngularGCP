import {Component} from '@angular/core';
@Component({
    selector:'flowDesigner-list',
    template:`
    <DIV class="framework-content-view">
<!-- <DIV class="framework-resize" id="resizeView"></DIV> -->
<DIV class="heading-container">
<DIV class="heading">
<H2 id="contentTitle">Flow Designer</H2>
<DIV class="sub-nav">

   <BUTTON class="slb-button icon-only">                   
<DIV class="slb-icon"> <span style="font-size:25px;" class="glyphicon glyphicon-search"></span>                    
 </DIV></BUTTON><BUTTON class="slb-button icon-only">
<DIV class="slb-icon">     <span style="font-size:25px;" class="glyphicon glyphicon-tasks"></span>               
</DIV><SPAN class="text">Filter</SPAN>                     </BUTTON>             
 </DIV></DIV></DIV>

<DIV class="slb-dashboard">

<DIV class="view-container" style="width:1200px;">
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


 


</DIV></DIV>
</DIV>`
})
export class FlowDesignerComponent{}