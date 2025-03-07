import { calculateMembership } from '../calculateMembership.js'

describe("If has 1 friend", function() {
    it("What is the volume of the cube in cubic meters if the height is 10.?", function() {
      let baseCost = 50;
      let friend = 1;
      let totalCost = calculateMembership(baseCost, friend);
      expect(totalCost).toBe(47.5);
    });
  });

  describe("If has 2 friend", function() {
    it("What is the volume of the cube in cubic meters if the height is 10.?", function() {
      let baseCost = 50;
      let friend = 2;
      let totalCost = calculateMembership(baseCost, friend);
      expect(totalCost).toBe(45);
    });
  });

  describe("If has 3 friend", function() {
    it("What is the volume of the cube in cubic meters if the height is 10.?", function() {
      let baseCost = 50;
      let friend = 3;
      let totalCost = calculateMembership(baseCost, friend);
      expect(totalCost).toBe(42.5);
    });
  });

  describe("If has 4 friend", function() {
    it("What is the volume of the cube in cubic meters if the height is 10.?", function() {
      let baseCost = 50;
      let friend = 4;
      let totalCost = calculateMembership(baseCost, friend);
      expect(totalCost).toBe(42.5);
    });
  });