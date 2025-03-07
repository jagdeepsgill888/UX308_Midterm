import { convertCoin2dollar } from '../convertCoin2dollar.js'

describe("A suite", function() {
    it("How many dollars do i have from the coins", function() {
        let Nickel = 1;
        let dime = 2;
        let Quarter = 3;
        let Loonie = 4;
        let Toonie = 5;
        let TotalDollar = convertCoin2dollar(Nickel, dime, Quarter, Loonie, Toonie);
      expect(TotalDollar.toFixed(2)).toBe("15.00");
    });
  });


  describe("A suite", function() {
    it("How many dollars do i have from the coins", function() {
        let Nickel = 2;
        let dime = 2;
        let Quarter = 2;
        let Loonie = 2;
        let Toonie = 2;
        let TotalDollar = convertCoin2dollar(Nickel, dime, Quarter, Loonie, Toonie);
      expect(TotalDollar.toFixed(2)).toBe("6.80");
    });
  });

  describe("A suite", function() {
    it("How many dollars do i have from the coins", function() {
        let Nickel = 3;
        let dime = 3;
        let Quarter = 3;
        let Loonie = 3;
        let Toonie = 3;
        let TotalDollar = convertCoin2dollar(Nickel, dime, Quarter, Loonie, Toonie);
      expect(TotalDollar.toFixed(2)).toBe("10.20");
    });
  });