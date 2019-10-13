import { Component, OnInit } from '@angular/core';
import { CargoService } from '../cargo.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  orderList = []
  constructor(private cargoService:CargoService, private navCtrl:NavController) { }

  ngOnInit() {
    this.cargoService.getAllOrder()
    this.cargoService.orderlist.subscribe(data =>{
      this.orderList = data
    })
  }

  navigate(index){
    this.navCtrl.navigateForward("/order-detail/" + index)
  }

}
