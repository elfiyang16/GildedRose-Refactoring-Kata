import Brie from "./brie";

export default class BackStagePass extends Brie {
  constructor() {
    super();
    this.VALUE_UNTIL_LAST_10_DAYS = 1;
    this.VALUE_UNTIL_LAST_5_DAYS = 2;
    this.VALUE_UNTIL_LAST_DAY = 3;
    this.VALUE_AFTER_LAST_DAY = 0;
  }

  updateQuality(item) {
    if (super.isExpired(item)) {
      item.quality = this.VALUE_AFTER_LAST_DAY = 0;
    } else if (item.sellIn <= 5) {
      super.increaseQuality(item, this.VALUE_UNTIL_LAST_DAY);
    } else if (item.sellIn < 11) {
      this.increaseQuality(item, this.VALUE_UNTIL_LAST_5_DAYS);
    } else {
      this.increaseQuality(item, this.VALUE_UNTIL_LAST_10_DAYS);
    }
  }
}
