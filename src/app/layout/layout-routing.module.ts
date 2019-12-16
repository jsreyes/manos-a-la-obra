import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent, HomeComponent } from './components';

const routes: Routes = [{
  // Loads Layout
  path: '', component: LayoutComponent,
  children: [
    { path: '', component: HomeComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
