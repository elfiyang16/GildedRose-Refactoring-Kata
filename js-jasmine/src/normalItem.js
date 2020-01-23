export default class NormalItem {
  constructor(height, width) {
    this.VALUE_BEFORE_EXPIRY = 1;
    this.VALUE_AFTER_EXPIRY = 2;
  }

  updateSellIn(item) {
    this.decreaseSellIn(item);
  }

  updateQuality(item) {
    if (this.isExpired(item)) {
      this.decreaseQuality(item, this.VALUE_AFTER_EXPIRY);
    } else {
      this.decreaseQuality(item, this.VALUE_BEFORE_EXPIRY);
    }
  }

  decreaseSellIn(item) {
    item.sellIn -= 1;
  }

  isExpired(item) {
    return item.sellIn <= 0;
  }

  decreaseQuality(item, value) {
    this.willBeQualityBelow0(item, value)
      ? (item.quality = 0)
      : (item.quality -= value);
  }

  willBeQualityBelow0(item, value) {
    return item.quality - value <= 0;
  }
}
