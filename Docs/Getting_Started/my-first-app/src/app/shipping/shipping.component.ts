import { Component, OnInit } from '@angular/core';

import { CartService } from '../service/cart.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.less']
})
export class ShippingComponent implements OnInit {
  
  // shippingCosts: Observable<any>;
  shippingCosts;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  	this.shippingCosts = this.cartService.getShippingPrices();
  }
  /*ngOnInit() {
  	this.shippingCosts = this.cartService.getShippingPrices()
  		.subscribe({
	      next: shippingCosts => {
	        this.shippingCosts = shippingCosts;
	      }
	  	});
  }*/

}
