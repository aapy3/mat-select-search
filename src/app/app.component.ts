import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-select-search';
  foodsarray = [
    {value: 'pizza-1', viewValue: 'Pizza is better than'},
    {value: 'tacos-2', viewValue: 'Tacos is really tacky'},
    {value: 'steak-10', viewValue: 'Burger asdfasdf asdf'},
    {value: 'pizza-11', viewValue: 'Pasta adfgdfg  dfgdfg  dfgdfg sdf'},
    {value: 'tacos-12', viewValue: 'Fries'}
  ];


}
