import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWorksOurServicesComponent } from './how-works-our-services.component';

describe('HowWorksOurServicesComponent', () => {
  let component: HowWorksOurServicesComponent;
  let fixture: ComponentFixture<HowWorksOurServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWorksOurServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWorksOurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
