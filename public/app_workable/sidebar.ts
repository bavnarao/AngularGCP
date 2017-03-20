import { Component } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

@Component({
	moduleId: module.id,
	selector: 'sidebar',
	template:`




<DIV class="framework-side-nav">
    
<NAV>
    
<A class="framework-nav-item" 
routerLink="/dashboard" routerLinkActive="active">
<DIV class="slb-icon"><svg xmlns="http://www.w3.org/2000/svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-dashboard"></use>                   </svg>              
</DIV><br/>  <SPAN>Dashboard</SPAN>               </A>               

<A class="framework-nav-item" 
routerLink="/seismicdrive" routerLinkActive="active">
<DIV class="slb-icon"><svg xmlns="http://www.w3.org/2000/svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" 
xlink:href="#icon-data" />                   </svg>                 
</DIV><SPAN>Seismic Drive</SPAN>               </A>               

<A class="framework-nav-item " 
routerLink="/flowdesigner" routerLinkActive="active">
<DIV class="slb-icon"><span style="font-size:25px;" class="glyphicon glyphicon-object-align-vertical"></span>               
</DIV><br/><SPAN>Flow Designer</SPAN>               </A>             

<A class="framework-nav-item " 
routerLink="/joblist" routerLinkActive="active">
<DIV class="slb-icon"><svg xmlns="http://www.w3.org/2000/svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" 
xlink:href="#icon-data" />                   </svg>                 
</DIV><SPAN>Job List</SPAN>              </A>              

 <A class="framework-nav-item " 
routerLink="/viewer" routerLinkActive="active">
<DIV class="slb-icon"><svg xmlns="http://www.w3.org/2000/svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" 
xlink:href="#icon-data" />                   </svg>                 
</DIV><SPAN>Viewer</SPAN>               </A>   

 </NAV>

</DIV>

`

})

export class SidebarComponent {

	}

