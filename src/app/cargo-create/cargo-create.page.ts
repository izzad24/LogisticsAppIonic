import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CargoService } from '../cargo.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cargo-create',
  templateUrl: './cargo-create.page.html',
  styleUrls: ['./cargo-create.page.scss'],
})
export class CargoCreatePage implements OnInit {

  cargoFormGroup = new FormGroup({
    cargoType: new FormControl('', [
      Validators.required
    ]),
    weight: new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\d]+$')
    ]),
    dimension: new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\d]+[Xx][\\d]+[Xx][\\d]+$')
    ]),
  })

  typeOptions = ['Single','Bulk']

  constructor(private cargoService: CargoService, private navCtrl:NavController) { }

  ngOnInit() {
  }

  onSelect(optionValue, fieldName){
    this.cargoFormGroup.controls[fieldName].setValue(optionValue)
    console.log(this.cargoFormGroup.value)
  }

  onSubmit(){
    this.cargoService.setFormValues(this.cargoFormGroup.value, "cargo")
    this.navCtrl.navigateForward("/disclaimer")
  }

  isValid(){
    return this.cargoFormGroup.valid
  }

}
