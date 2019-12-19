import { MaterialUiModule } from './../material-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';

import { SliderComponent, MenuComponent, FooterComponent, LayoutComponent, HomeComponent,
         HowWorksOurServicesComponent, UsComponent } from './index';

const COMPONENTS = [ MenuComponent, FooterComponent, SliderComponent, LayoutComponent,
                     HomeComponent, HowWorksOurServicesComponent, UsComponent ];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialUiModule
  ]
})
export class LayoutModule { }
