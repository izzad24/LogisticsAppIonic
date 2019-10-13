import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface CargoFormValues {
  cargoType: string
  weight: number
  dimension: string
}

interface DisclaimerFormValues{
  disclaimer: boolean
  hazard: boolean
  insurance: boolean
}

interface AddressFormValues{
  shipToContactNum: string
  shipTocontactName: string
  shipToAdd: string
  shipToAdd2: string
  shipToState: string
  shipToPostcode: number
  shipToCountry: string
  shipFromContactNum: string
  shipFromContactName: string
  shipFromAdd: string
  shipFromAdd2: string
  shipFromState: string
  shipFromPostcode: number
  shipFromCountry: string
}

interface ShipTimeFormValues{
  shipPackage: string
}

interface FormValues{
  cargo?: CargoFormValues
  disclaimer?: DisclaimerFormValues
  address?: AddressFormValues
  shipTime?: ShipTimeFormValues
}

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  orderlist = new BehaviorSubject([])

  formValues = new BehaviorSubject<FormValues>({})

  constructor(private httpClient: HttpClient) { }

  getAllOrder(){
    this.httpClient.get("http://localhost:3000/order").subscribe(datas => {
      // let orders
      console.log(datas)
      this.orderlist.next(datas)
      console.log(this.orderlist.value)
    })
  }
  setFormValues(specificFormValues, formName){
    let currentFormValues = this.formValues.getValue()
    currentFormValues[formName] = specificFormValues
    
    this.formValues.next(currentFormValues)
  }

  saveToDb(){
    let currentValue = this.formValues.getValue()
    console.log(currentValue)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }

    this.httpClient.post("http://localhost:3000/order", {
      "cargoType" : currentValue.cargo.cargoType,
      "cargoWeight" : currentValue.cargo.weight,
      "cargoDimensions" : currentValue.cargo.dimension,
      "disclaimerFlag" : currentValue.disclaimer.disclaimer,
      "hazardFlag" : currentValue.disclaimer.hazard,
      "insuranceFlag" : currentValue.disclaimer.insurance,
      "shipToName" : currentValue.address.shipTocontactName,
      "shipToContact" : currentValue.address.shipToContactNum,
      "shipToAdd1" : currentValue.address.shipToAdd,
      "shipToAdd2" : currentValue.address.shipToAdd2,
      "shipToState" : currentValue.address.shipToState,
      "shipToPostcode" : currentValue.address.shipToPostcode,
      "shipToCountry" : currentValue.address.shipToCountry,
      "shipFromName" : currentValue.address.shipFromContactName,
      "shipFromContact" : currentValue.address.shipFromContactNum,
      "shipFromAdd1" : currentValue.address.shipFromAdd,
      "shipFromAdd2" : currentValue.address.shipFromAdd2,
      "shipFromState" : currentValue.address.shipFromState,
      "shipFromPostcode" : currentValue.address.shipFromPostcode,
      "shipFromCountry" : currentValue.address.shipFromCountry,
      "shippingPackage" : currentValue.shipTime
       }, httpOptions).subscribe(response => {
        console.log(response)
      })

    console.log('saved to db')
  }

}
