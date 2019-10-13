import { Component, OnInit } from '@angular/core';
import { CargoService } from '../cargo.service';
import { NavController, AlertController } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-ship-time-page',
  templateUrl: './ship-time-page.page.html',
  styleUrls: ['./ship-time-page.page.scss'],
})
export class ShipTimePagePage implements OnInit {
  ShipPackageForm = new FormControl('',Validators.required)

  shipOptions = ["SuperExpress","Express","Normal"]
  detailOptions = {
    SuperExpress: ["Local Only, Same Day Shipping"],
    Express: ["Local: Next Business Day, International: Within 3 Days"],
    Normal: ["Local: Within 5 Business Days, International: Within 4 Weeks"]
  }

  constructor(private cargoService: CargoService, private navCtrl: NavController,private alertController: AlertController) { }

  ngOnInit() {
  }

  onSelect(optionValue){
    this.ShipPackageForm.setValue(optionValue)
    console.log(this.ShipPackageForm.value)
  }

  onSubmit(){
    this.cargoService.setFormValues(this.ShipPackageForm.value, "shipTime")
    // this.navCtrl.navigateRoot('/home')
    // this.cargoService.saveToDb()

    this.alertController.create({
      header: "submit",
      message: "Submit and go to homepage?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            this.cargoService.saveToDb()
            this.navCtrl.navigateBack("home")
          }
        },
        {
          text: "Cancel"
        }
      ]
    }).then((alert) => {
      alert.present()
    })
  }


  isValid(){
    return this.ShipPackageForm.valid
  }
}
