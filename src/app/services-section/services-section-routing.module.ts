import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainServicesComponent } from './components';


const routes: Routes = [{
  path: '', component: MainServicesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesSectionRoutingModule { }
