import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CargoService } from '../cargo.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shipping-details-page',
  templateUrl: './shipping-details-page.page.html',
  styleUrls: ['./shipping-details-page.page.scss'],
})
export class ShippingDetailsPagePage implements OnInit {
  ShippingDetailForm = new FormGroup({
    shipToContactNum: new FormControl('',[Validators.required, Validators.pattern('^[+]{1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')]),
    shipTocontactName: new FormControl('',[Validators.required]),
    shipToAdd: new FormControl('',[Validators.required]),
    shipToAdd2: new FormControl(),
    shipToCity: new FormControl('',[Validators.required]),
    shipToState: new FormControl('',[Validators.required]),
    shipToPostcode: new FormControl('',[
      Validators.required,
      Validators.pattern('^[\\d]+$')
    ]),
    shipToCountry: new FormControl('',[Validators.required]),
    shipFromContactNum: new FormControl('',[Validators.required, Validators.pattern('^[+]{1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')]),
    shipFromContactName: new FormControl('',[Validators.required]),
    shipFromAdd: new FormControl('',[Validators.required]),
    shipFromAdd2: new FormControl(),
    shipFromCity: new FormControl('',[Validators.required]),
    shipFromState: new FormControl('',[Validators.required]),
    shipFromPostcode: new FormControl('',[
      Validators.required,
      Validators.pattern('^[\\d]+$')
    ]),
    shipFromCountry: new FormControl('',[Validators.required]),
  })

  constructor(private cargoService: CargoService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmit(){
    this.cargoService.setFormValues(this.ShippingDetailForm.value, "address")
    //console.log("selected OS: "+ this.selectedOs.value.osName + this.selectedOs.value.notes)
    this.navCtrl.navigateForward("/ship-selection")
  }

  isValid(){
    return this.ShippingDetailForm.valid
  }
}
