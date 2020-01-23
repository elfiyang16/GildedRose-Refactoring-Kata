import Shop from "../src/shop.js";
import Item from "../src/item.js";

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
    it("a. quanlity increases by 1 up to 10 days", function() {
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

    it("b. quanlity increases by 2 up to 5 days", function() {
      const pass = new Item("Backstage passes to a TAFKAL80ETC concert", 6, 10);
      const gildedRose = new Shop([pass]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 12)
      );
    });

    it("c. quanlity increases by 3 up to last day", function() {
      const pass = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10);
      const gildedRose = new Shop([pass]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(
        new Item("Backstage passes to a TAFKAL80ETC concert", 3, 13)
      );
    });

    it("d. quality always remains 0 after concert", function() {
      const pass = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10);
      const gildedRose = new Shop([pass]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(
        new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0)
      );
    });
  });

  describe("4. Rule of Thumb", function() {
    it("a. sulfuras never changes sellby and quality always is 80", function() {
      const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 10, 80);
      const gildedRose = new Shop([sulfuras]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item("Sulfuras, Hand of Ragnaros", 10, 80));
    });

    it("b. no other item should ever has a quality more than 50", function() {
      const brie = new Item("Aged Brie", 10, 50);
      const cursedRelic = new Item("Cursed Relic", 10, 50);
      const gildedRose = new Shop([brie, cursedRelic]);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(new Item("Aged Brie", 9, 50));
      expect(items[1]).toEqual(new Item("Cursed Relic", 9, 49));
    });
  });
});
