import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudents } from 'src/app/shared/models/studentInterface';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
@Output() newStd:EventEmitter<Istudents>=new EventEmitter<Istudents>()
@ViewChild('stdForm') stdForm!:NgForm
  constructor() { }

  ngOnInit(): void {
  }
  submitForm(){
    if(this.stdForm.valid){
   let newStd=(this.stdForm.value);
   newStd.salary=+this.stdForm.controls['salary'].value;
   this.newStd.emit(newStd);
  }
  this.stdForm.reset();

  }

}
