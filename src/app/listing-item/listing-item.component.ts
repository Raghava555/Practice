import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import listData  from '../JSON/list.json';

export interface PeriodicElement {
  firstName: string;
  lastName: number;
  country: string;
  gender: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.css']
})
export class ListingItemComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'country', 'gender', 'address'];
  public dataSource:any = [];
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource = listData;
    console.log(listData);
  }

}
