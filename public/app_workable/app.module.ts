import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent }  from './app.component';
import {TopNavComponent} from './topnav';
import {SidebarComponent} from './sidebar';
import {MainNavComponent} from './mainnav';
import {SeismicDriveComponent} from './seismicDrive.component';
import {ViewerComponent} from './viewer.component';
import { RouterModule } from '@angular/router';
import {JobListComponent} from './jobList.component';

import {routingComponents} from './app-routing.module';
import { FormsModule } from '@angular/forms';

//import { routing }        from './app.routes';
import { HttpModule }     from '@angular/http';
import {MaterialService} from "./material.service";
import {SearchPipe} from "./search.pipe";



@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, HttpModule, RouterModule ],
  declarations: [ AppComponent,TopNavComponent, SidebarComponent,MainNavComponent,routingComponents,SearchPipe ],
  providers: [MaterialService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



