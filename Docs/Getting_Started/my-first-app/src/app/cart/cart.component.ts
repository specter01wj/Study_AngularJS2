import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
  	private cartService: CartService,
  	private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  	this.items = this.cartService.getItems();
  }

}
