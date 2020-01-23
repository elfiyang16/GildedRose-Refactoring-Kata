import NormalItem from "./normalItem";
import Brie from "./brie";

export default class Shop {
  constructor(items = [], normalItem = new NormalItem(), brie = new Brie()) {
    this.items = items;
    this.normalItem = normalItem;
    this.brie = brie;
  }

  updateQuality() {
    var self = this;
    this.items.forEach(item => {
      self.normalItem.updateSellIn(item);
      if (self.isBrie(item)) {
        self.brie.updateQuality(item);
      } else {
        self.normalItem.updateQuality(item);
      }
    });
    return self.items;
  }

  isBrie(item) {
    return item.name.includes("Aged Brie");
  }
}
