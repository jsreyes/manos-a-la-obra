import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { MainCatalogueComponent } from './components/main-catalogue/main-catalogue.component';

export const CATALOGUE_COMPONENTS = [ MainCatalogueComponent ];
@NgModule({
  declarations: CATALOGUE_COMPONENTS,
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }
