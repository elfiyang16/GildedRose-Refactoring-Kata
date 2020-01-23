// var Item = require('../src/item.js')
// var Shop = require('../src/shop.js')
var { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function() {
  describe("1. Normal item", function() {
    it("a. can reduce quality and sellIn correctly when update", function() {
      const cursedRelic = new Item("Cursed Relic", 9, 9);
      const gildedRose = new Shop([cursedRelic]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item("Cursed Relic", 8, 8));
    });

    it("b. quality reduces 2 times faster once sell by has passed", function() {
      const gildedRose = new Shop([new Item("Cursed Relic", 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item("Cursed Relic", -1, 8));
    });
  });
});
