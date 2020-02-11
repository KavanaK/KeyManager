import { Component } from '@angular/core';
import { SidebarService } from './service/sidebar.service';
import { trigger, state, style, animate,transition,} from '@angular/animations';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  

})

export class AppComponent {
  isExpanded= true;
  contentMargin = 256;
  title = 'Keymanager';
  constructor(private router: Router){}
   
 
    sideclose() {
      
      this.isExpanded = !this.isExpanded;
      if(!this.isExpanded) {
        this.contentMargin = 70;
      } else {
        this.contentMargin = 256;
      }
   }
  
 onclick() {
  this.router.navigate(['/Pages/dashboard']) 

 }
 
  }

