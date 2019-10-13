import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipTimePagePage } from './ship-time-page.page';

describe('ShipTimePagePage', () => {
  let component: ShipTimePagePage;
  let fixture: ComponentFixture<ShipTimePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipTimePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipTimePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
