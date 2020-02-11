import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { TableComponent } from './Pages/table/table.component';
import { CustomComponent } from './custom/custom.component';
const routes: Routes = [
  { path:'Pages/dashboard',component:DashboardComponent},
  {path:'Pages/table',component:TableComponent},
  {path:'custom',component:CustomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  RoutingComponent = [DashboardComponent,CustomComponent];

 }
