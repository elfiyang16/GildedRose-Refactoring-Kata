import NormalItem from "./normalItem";
import Brie from "./brie";
import BackStagePass from "./backStagePass";
import Conjured from "./conjured";

export default class Shop {
  constructor(
    items = [],
    normalItem = new NormalItem(),
    brie = new Brie(),
    backStagePass = new BackStagePass(),
    conjured = new Conjured()
  ) {
    this.items = items;
    this.normalItem = normalItem;
    this.brie = brie;
    this.backStagePass = backStagePass;
    this.conjured = conjured;
  }

  updateQuality() {
    var self = this;
    this.items.forEach(item => {
      if (self.isSulfuras(item)) return;
      self.isBrie(item)
        ? self.brie.updateQuality(item)
        : self.isPass(item)
        ? self.backStagePass.updateQuality(item)
        : self.isConjured(item)
        ? self.conjured.updateQuality(item)
        : self.normalItem.updateQuality(item);
      self.normalItem.updateSellIn(item);
    });
    return self.items;
  }

  isBrie(item) {
    return item.name.includes("Aged Brie");
  }

  isPass(item) {
    return item.name.includes("Backstage passes to a TAFKAL80ETC concert");
  }

  isSulfuras(item) {
    return item.name.includes("Sulfuras, Hand of Ragnaros");
  }

  isConjured(item) {
    return item.name.includes("Conjured");
  }
}
