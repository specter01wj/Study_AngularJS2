export class ItemBuiltIND {
  static nextId = 0;

  static items: ItemBuiltIND[] = [
    new ItemBuiltIND(
      null,
      'Teapot',
      'stout'
    ),
    new ItemBuiltIND(1, 'Lamp', 'bright'),
    new ItemBuiltIND(2, 'Phone', 'slim' ),
    new ItemBuiltIND(3, 'Television', 'vintage' ),
    new ItemBuiltIND(4, 'Fishbowl')
  ];


  constructor(
    public id?: number,
    public name?: string,
    public feature?: string,
    public url?: string,
    public rate = 100,
    ) {
    this.id = id ? id : ItemBuiltIND.nextId++;
  }

  clone(): ItemBuiltIND {
    return Object.assign(new ItemBuiltIND(), this);
  }
}
