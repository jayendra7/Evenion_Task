import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  tableTwo = [
    { year: 2012, month: 'December', price: '$390' },
    { year: 2012, month: 'January', price: '$400' },
    { year: 2013, month: 'February', price: '$600' },
    { year: 2015, month: 'April', price: '$700' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
