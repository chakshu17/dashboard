import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './Navigation/sidenav/sidenav.component';
import { TemplateformComponent } from './dashboard/form/templateform/templateform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    TemplateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
