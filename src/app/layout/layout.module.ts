import { MaterialUiModule } from './../material-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';

import { SliderComponent, MenuComponent, FooterComponent, LayoutComponent, HomeComponent,
         HowWorksOurServicesComponent, UsComponent, PageInConstructionComponent } from './index';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const COMPONENTS = [ MenuComponent, FooterComponent, SliderComponent, LayoutComponent,
                     HomeComponent, HowWorksOurServicesComponent, UsComponent, PageInConstructionComponent];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
