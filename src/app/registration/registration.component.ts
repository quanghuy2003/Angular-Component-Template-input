import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {Registration} from "../registration";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listRegistration: Registration[]=[]

  registrationForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    country: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl('')

  });

  addNewProduct() {
    this.listRegistration.push(this.registrationForm.value)
    // this.listProduct.push(this.product);
  }

}
