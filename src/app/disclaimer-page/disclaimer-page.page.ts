import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CargoService } from '../cargo.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-disclaimer-page',
  templateUrl: './disclaimer-page.page.html',
  styleUrls: ['./disclaimer-page.page.scss'],
})
export class DisclaimerPagePage implements OnInit {

  DisclaimerFormGroup = new FormGroup({
    disclaimer: new FormControl('',[
      Validators.requiredTrue
    ]),
    hazard: new FormControl('',[
      Validators.requiredTrue
    ]),
    insurance: new FormControl(false)
  })
  constructor(private cargoService: CargoService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmit(){
    this.cargoService.setFormValues(this.DisclaimerFormGroup.value, "disclaimer")
    this.navCtrl.navigateForward("/shipping-details")
  }

  isValid(){
    // console.log(this.DisclaimerFormGroup.valid)
    return this.DisclaimerFormGroup.valid
  }
}
