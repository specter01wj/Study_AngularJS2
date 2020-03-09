import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  	private _productUrl = 'api/products/products.json';

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IProduct | undefined> {
        return this._http.get<IProduct>(this._productUrl)
	        .pipe(
		        tap(data => console.log(data)),
		        catchError(this.handleError)
	      	);
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return throwError(err.message);
    }

}
