import NormalItem from "./normalItem";

export default class Shop {
  constructor(items = [], normalItem = new NormalItem()) {
    this.items = items;
    this.normalItem = normalItem;
  }

  updateQuality() {
    var self = this;
    this.items.forEach(item => {
      self.normalItem.updateSellIn(item);
      self.normalItem.updateQuality(item);
    });
    return self.items;
  }
}
