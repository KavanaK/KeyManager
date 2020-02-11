import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Shared/nav/nav.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule ,MatButtonToggleModule,MatCardModule} from '@angular/material';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { TableComponent } from './Pages/table/table.component';
import { CustomComponent } from './custom/custom.component';
import { ShContextMenuComponent } from './external/sh-context-menu/sh-context-menu.component';
import { IShContextMenuItem } from './external/sh-context-menu/sh-context-menu.models';
import { HtmlDirective } from './external/sh-context-menu/html.directive';

import{ShContextMenuDirective} from './external/sh-context-menu/sh-context-menu.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TableComponent,
    CustomComponent,
  
    HtmlDirective,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatIconModule,MatCardModule,
     MatListModule ,
     MatToolbarModule,
      MatButtonModule,
      HttpClientModule
   
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
