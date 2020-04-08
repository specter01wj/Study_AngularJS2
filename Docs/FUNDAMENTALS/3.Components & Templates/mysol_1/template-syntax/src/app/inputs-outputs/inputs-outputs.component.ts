import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs-outputs',
  templateUrl: './inputs-outputs.component.html',
  styleUrls: ['./inputs-outputs.component.less']
})
export class InputsOutputsComponent implements OnInit {
	currentItem = 'Television';

  lastChanceItem = 'Beanbag';
  items = ['item1', 'item2', 'item3', 'item4'];
  wishlist = ['Drone', 'Computer'];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }


  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }

  buyClearanceItem(item) {
    console.warn(`Parent says: buying ${item}.`);
  }

  saveForLater(item) {
    console.warn(`Parent says: saving ${item} for later.`);
  }

  addToWishList(wish: string) {
    console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.warn(this.wishlist);
  }

}
