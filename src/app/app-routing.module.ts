import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cargo-create', loadChildren: './cargo-create/cargo-create.module#CargoCreatePageModule' },
  { path: 'disclaimer', loadChildren: './disclaimer-page/disclaimer-page.module#DisclaimerPagePageModule' },
  { path: 'shipping-details', loadChildren: './shipping-details-page/shipping-details-page.module#ShippingDetailsPagePageModule' },
  { path: 'ship-selection', loadChildren: './ship-time-page/ship-time-page.module#ShipTimePagePageModule' },
  { path: 'order-list', loadChildren: './order-list/order-list.module#OrderListPageModule' },
  { path: 'order-detail/:index', loadChildren: './order-detail/order-detail.module#OrderDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
