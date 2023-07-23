import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

}
