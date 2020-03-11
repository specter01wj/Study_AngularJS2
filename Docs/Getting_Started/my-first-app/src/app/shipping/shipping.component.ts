import { Component, OnInit } from '@angular/core';

import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.less']
})
export class ShippingComponent implements OnInit {
  
  shippingCosts;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  	this.shippingCosts = this.cartService.getShippingPrices();
  }

}
