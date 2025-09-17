import { Component, OnInit } from '@angular/core';
import { Istudents } from '../../models/studentInterface';
import { employeesArr } from '../../const/student';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  employees: Array<Istudents> = employeesArr;

  constructor() { }

  ngOnInit(): void {
  }
  addNewStd(std: Istudents) {
    this.employees.push(std)
  }

}
