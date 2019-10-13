import { Component, OnInit } from '@angular/core';
import { CargoService } from '../cargo.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  selectedOrder = null
  constructor(private cargoService:CargoService,private navCtrl:NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    let orderIndex = this.route.snapshot.params.index
    this.cargoService.orderlist.subscribe(data =>{
      this.selectedOrder = data[orderIndex]
    })
  }

}
