import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayCols = [ 'customerId', 'name', 'phone', 'discountCode' ];
  ELEMENT_DATA = [
    {customerId: 1, name: 'Hydrogen', phone: 1.0079, discountCode: 'H'},
    {customerId: 2, name: 'Helium', phone: 4.0026, discountCode: 'He'},
    {customerId: 3, name: 'Lithium', phone: 6.941, discountCode: 'Li'},
    {customerId: 4, name: 'Beryllium', phone: 9.0122, discountCode: 'Be'},
    {customerId: 5, name: 'Boron', phone: 10.811, discountCode: 'B'},
    {customerId: 6, name: 'Carbon', phone: 12.0107, discountCode: 'C'},
    {customerId: 7, name: 'Nitrogen', phone: 14.0067, discountCode: 'N'},
    {customerId: 8, name: 'Oxygen', phone: 15.9994, discountCode: 'O'},
    {customerId: 9, name: 'Fluorine', phone: 18.9984, discountCode: 'F'},
    {customerId: 10, name: 'Neon', phone: 20.1797, discountCode: 'Ne'},
  ];
  
  customers = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {


  }

}
