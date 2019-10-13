import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoCreatePage } from './cargo-create.page';

describe('CargoCreatePage', () => {
  let component: CargoCreatePage;
  let fixture: ComponentFixture<CargoCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
