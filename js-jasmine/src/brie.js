import NormalItem from "./normalItem";

export default class Brie extends NormalItem {
  constructor() {
    super();
  }

  updateQuality(item) {
    super.isExpired(item)
      ? this.increaseQuality(item, this.VALUE_AFTER_EXPIRY)
      : this.increaseQuality(item, this.VALUE_BEFORE_EXPIRY);
  }

  increaseQuality(item, value) {
    this.willQualityBeAbove50(item, value)
      ? (item.quality = 50)
      : (item.quality += value);
  }

  willQualityBeAbove50(item, value) {
    return item.quality + value >= 50;
  }
}
