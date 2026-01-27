import { Component, Input } from '@angular/core';
import { ItemBuiltIND } from '../interface/item-builtind';

@Component({
  selector: 'app-stout-item',
  template: `I'm a little {{item.name}}, short and stout!`
})
export class StoutItemComponent {
  @Input() item: ItemBuiltIND;
}

@Component({
  selector: 'app-best-item',
  template: `This is the brightest {{item.name}} in town.`
})
export class BestItemComponent {
  @Input() item: ItemBuiltIND;
}

@Component({
  selector: 'app-device-item',
  template: `Which is the slimmest {{item.name}}?`
})
export class DeviceItemComponent {
  @Input() item: ItemBuiltIND;
}

@Component({
  selector: 'app-lost-item',
  template: `Has anyone seen my {{item.name}}?`
})
export class LostItemComponent {
  @Input() item: ItemBuiltIND;
}

@Component({
  selector: 'app-unknown-item',
  template: `{{message}}`
})
export class UnknownItemComponent {
  @Input() item: ItemBuiltIND;
  get message() {
    return this.item && this.item.name ?
      `${this.item.name} is strange and mysterious.` :
      'A mystery wrapped in a fishbowl.';
  }
}

export const ItemSwitchComponents =
  [ StoutItemComponent, BestItemComponent, DeviceItemComponent, LostItemComponent, UnknownItemComponent ];
