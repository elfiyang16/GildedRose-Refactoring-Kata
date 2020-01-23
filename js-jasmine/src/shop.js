import NormalItem from "./normalItem";
import Brie from "./brie";
import BackStagePass from "./backStagePass";

export default class Shop {
  constructor(
    items = [],
    normalItem = new NormalItem(),
    brie = new Brie(),
    backStagePass = new BackStagePass()
  ) {
    this.items = items;
    this.normalItem = normalItem;
    this.brie = brie;
    this.backStagePass = backStagePass;
  }

  updateQuality() {
    var self = this;
    this.items.forEach(item => {
      if (self.isBrie(item)) {
        self.brie.updateQuality(item);
      } else if (self.isPass(item)) {
        self.backStagePass.updateQuality(item);
      } else {
        self.normalItem.updateQuality(item);
      }
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
}
