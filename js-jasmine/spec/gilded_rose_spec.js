// var Item = require('../src/item.js')
// var Shop = require('../src/shop.js')
var { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function() {
  describe("1. Normal item", function() {
    it("a. can reduce quality and sellIn correctly by 1 when update", function() {
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

    it("c. quality should not be less than 0", function() {
      const cursedRelic = new Item("Cursed Relic", -3, 0);
      const gildedRose = new Shop([cursedRelic]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item("Cursed Relic", -4, 0));
    });
  });

  describe("2. Aged Brie", function() {
    it("a. quality increases by 1 everyday", function() {
      const brie = new Item("Aged Brie", 10, 10);
      const gildedRose = new Shop([brie]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item("Aged Brie", 9, 11));
    });

    it("b. quality increases by 2 after pass sell by date", function() {
      const brie = new Item("Aged Brie", -5, 10);
      const gildedRose = new Shop([brie]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item("Aged Brie", -6, 12));
    });
  });

  describe("3. Backstage Pass", function() {
    it("a. quantity increases by 1 up to 10 days", function() {
      const pass = new Item(
        "Backstage passes to a TAFKAL80ETC concert",
        12,
        10
      );
      const gildedRose = new Shop([pass]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(
        new Item("Backstage passes to a TAFKAL80ETC concert", 11, 11)
      );
    });

    it("b. quantity increases by 2 up to 5 days", function() {
      const pass = new Item("Backstage passes to a TAFKAL80ETC concert", 6, 10);
      const gildedRose = new Shop([pass]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(
        new Item("Backstage passes to a TAFKAL80ETC concert", 6, 12)
      );
    });

    it("c. quantity increases by 3 up to last day", function() {
      const pass = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10);
      const gildedRose = new Shop([pass]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(
        new Item("Backstage passes to a TAFKAL80ETC concert", 3, 13)
      );
    });
  });
});
