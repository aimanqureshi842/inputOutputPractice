import { Component, Input, OnInit } from '@angular/core';
import { Istudents } from 'src/app/shared/models/studentInterface';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
@Input() employeesArray:Array<Istudents>=[]
  constructor() { }

  ngOnInit(): void {
  }

}
