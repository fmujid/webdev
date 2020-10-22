import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-component',
  templateUrl: './request-component.component.html',
  styleUrls: ['./request-component.component.css']
})
export class RequestComponentComponent implements OnInit {

  numTravelers: number = 0;
  price: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculatePrice(): void {
    this.price = this.numTravelers * 150;
  }

}
