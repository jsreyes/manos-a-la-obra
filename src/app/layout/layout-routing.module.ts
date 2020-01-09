import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent, HomeComponent, UsComponent, PageInConstructionComponent } from './components';

const routes: Routes = [{
  // Loads Layout
  path: '', component: LayoutComponent,
  children: [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'nosotros', component: UsComponent},
    { path: 'servicios', loadChildren: './../services-section/services-section.module#ServicesSectionModule'},
    { path: 'catalogo', loadChildren: './../catalogue/catalogue.module#CatalogueModule'},
    { path: 'proyectos', component: PageInConstructionComponent},
    { path: 'cotiza', component: PageInConstructionComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
