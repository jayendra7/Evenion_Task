import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  tableOne = [
    { year: 2012, month: 'January', price: '$400' },
    { year: 2013, month: 'February', price: '$900' },
    { year: 2014, month: 'March', price: '$800' },
    { year: 2014, month: 'May', price: '$920' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
