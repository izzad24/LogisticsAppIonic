import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShippingDetailsPagePage } from './shipping-details-page.page';
import { SharedComponentModule } from '../shared-component/shared-component.module';

const routes: Routes = [
  {
    path: '',
    component: ShippingDetailsPagePage
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
  declarations: [ShippingDetailsPagePage]
})
export class ShippingDetailsPagePageModule {}
