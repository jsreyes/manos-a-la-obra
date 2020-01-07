import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCatalogueComponent } from './index';

const routes: Routes = [{
  path: '', component: MainCatalogueComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
