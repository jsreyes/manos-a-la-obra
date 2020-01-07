import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesSectionRoutingModule } from './services-section-routing.module';
import { MainServicesComponent } from './components/main-services/main-services.component';

export const COMPONENTS = [ MainServicesComponent ];

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    ServicesSectionRoutingModule
  ]
})
export class ServicesSectionModule { }
