import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCatalogueComponent } from './main-catalogue.component';

describe('MainCatalogueComponent', () => {
  let component: MainCatalogueComponent;
  let fixture: ComponentFixture<MainCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
