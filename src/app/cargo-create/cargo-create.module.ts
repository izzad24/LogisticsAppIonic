import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CargoCreatePage } from './cargo-create.page';
import { SharedComponentModule } from '../shared-component/shared-component.module';

const routes: Routes = [
  {
    path: '',
    component: CargoCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentModule
  ],
  declarations: [CargoCreatePage]
})
export class CargoCreatePageModule {}
