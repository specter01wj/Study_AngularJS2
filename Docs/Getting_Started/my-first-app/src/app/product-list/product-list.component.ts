import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

// import { products } from '../products';
import { IProduct } from '../product';

import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  /*share() {
    window.alert('The product has been shared!');
  }*/

  productId: number;
  pageTitle: string = 'Product List';
  productName: string = 'Phones';
  errorMessage: string;
  // products: any[] = [];
  products: IProduct | undefined;

  constructor(private route: ActivatedRoute, 
          private _productService: ProductService,
          private _location: Location) { }

  backClicked() {
      this._location.back();
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    });
  }

}
