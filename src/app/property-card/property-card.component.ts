import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  Item:any={
    "Id":1,
    "Name":"Sam",
    "Type":"House",
    "Price":12000
  }

  ngOnInit() {
  }

}
