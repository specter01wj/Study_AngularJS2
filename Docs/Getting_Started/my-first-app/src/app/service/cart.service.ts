import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor() { }


  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    // return this.items;
    return this.items = [
	  {
	    name: 'Phone XL',
	    price: 799,
	    description: 'A large phone with one of the best screens'
	  },
	  {
	    name: 'Phone Mini',
	    price: 699,
	    description: 'A great phone with one of the best cameras'
	  },
	  {
	    name: 'Phone Standard',
	    price: 299,
	    description: ''
	  }
	];
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
