import NormalItem from "./normalItem";

export default class Conjured extends NormalItem {
  constructor() {
    super();
  }

  decreaseQuality(item, value) {
    super.willQualityBeBelow0(item, 2 * value)
      ? (item.quality = 0)
      : (item.quality -= 2 * value);
  }
}
