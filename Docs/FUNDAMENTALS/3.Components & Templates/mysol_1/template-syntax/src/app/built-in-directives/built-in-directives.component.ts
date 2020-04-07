import { Component, OnInit } from '@angular/core';

import { ItemBuiltIND } from '../interface/item-builtind';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.less']
})
export class BuiltInDirectivesComponent implements OnInit {
	canSave =  true;
  isSpecial = true;
  isUnchanged = true;

  isActive = true;
  nullCustomer = null;
  currentCustomer = {
    name: 'Laura'
  };

  item: ItemBuiltIND; // defined to demonstrate template context precedence
  items: ItemBuiltIND[];

  currentItem: ItemBuiltIND;

  // trackBy change counting
  itemsNoTrackByCount   = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;

  constructor() { }

  ngOnInit(): void {
  	this.resetItems();
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.itemsNoTrackByCount = 0;
  }

  setUppercaseName(name: string) {
    this.currentItem.name = name.toUpperCase();
  }

  currentClasses: {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special':  this.isSpecial
    };
  }

  currentStyles: {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  isActiveToggle() {
    this.isActive = !this.isActive;
  }

  giveNullCustomerValue() {
    !(this.nullCustomer = null) ? (this.nullCustomer = 'Kelly') : (this.nullCustomer = null);
  }

  resetNullItem() {
    this.nullCustomer = null;
  }

  resetItems() {
    this.items = ItemBuiltIND.items.map(item => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }

  resetList() {
    this.resetItems()
    this.itemsWithTrackByCountReset = 0;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
  }

  changeIds() {
    this.items.forEach(i => i.id += 1 * this.itemIdIncrement);
    this.itemsWithTrackByCountReset = -1;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
  }

  clearTrackByCounts() {
    this.resetItems();
    this.itemsNoTrackByCount = 0;




    
    this.itemsWithTrackByCount = 0;
    this.itemIdIncrement = 1;
  }

  trackByItems(index: number, item: ItemBuiltIND): number { return item.id; }

  trackById(index: number, item: any): number { return item['id']; }

}
