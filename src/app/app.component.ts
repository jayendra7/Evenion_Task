import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EvenionAssignment';
  myForm: FormGroup;

  tableOne = [
    { year: 2012, month: 'January', price: '$400' },
    { year: 2013, month: 'February', price: '$900' },
    { year: 2014, month: 'March', price: '$800' },
    { year: 2014, month: 'May', price: '$920' }
  ]

  tableTwo = [
    { year: 2012, month: 'December', price: '$390' },
    { year: 2012, month: 'January', price: '$400' },
    { year: 2013, month: 'February', price: '$600' },
    { year: 2015, month: 'April', price: '$700' }
  ]

  ngOnInit() {


  }





}
