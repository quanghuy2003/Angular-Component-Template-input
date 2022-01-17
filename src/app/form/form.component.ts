import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
form = new FormGroup({
  name : new FormControl(),
  age : new FormControl(),
  address : new FormControl()
})
  constructor() { }

  ngOnInit(): void {
  }

  create(){
  console.log(this.form.value)
  }
}
