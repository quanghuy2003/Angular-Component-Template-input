import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from "../model/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listStudent: Student[]=[
    {
      id : '1',
      name:'Huy',
      age: '18',
    },
    {
      id : '2',
      name:'Uy',
      age: '18',
    },
    {
      id : '3',
      name:'Dũng',
      age: '23',
    },
  ]

  studentForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',Validators.required),
    age: new FormControl('',[Validators.required,Validators.min(18)]),
  });

  addNewStudent() {
    this.listStudent.push(this.studentForm.value)
  }


}
