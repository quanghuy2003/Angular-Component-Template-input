import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {Article} from "../article";
import {FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // product : Product = {};
  listProduct: Product[]=[
  {
    id : '1',
    name:'táo',
    price: '1000'
  },
  {
    id : '2',
    name:'dứa',
    price: '2000'
  },
  {
    id : '3',
    name:'mít',
    price: '3000'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl('')
  });

  addNewProduct() {
    this.listProduct.push(this.productForm.value)
    // this.listProduct.push(this.product);
  }

}
