import { convertFahrenheit2Celsius } from '../convertFahrenheit2Celsius.js'

describe("A suite", function() {
    it("What is 40F in C?", function() {
      let fahrenheit = 40;
      let celsius = convertFahrenheit2Celsius(fahrenheit);
      expect(celsius.toFixed(0)).toBe("4");
    });
  });

  describe("A suite", function() {
    it("What is the bowling point of 212F in C?", function() {
      let fahrenheit = 212;
      let celsius = convertFahrenheit2Celsius(fahrenheit);
      expect(celsius.toFixed(0)).toBe("100");
    });
  });

  describe("A suite", function() {
    it("What is the freezing point of 32F in C?", function() {
      let fahrenheit = 32;
      let celsius = convertFahrenheit2Celsius(fahrenheit);
      expect(celsius.toFixed(0)).toBe("0");
    });
  });

  describe("A suite", function() {
    it("What is the roam temp of 70F in C?", function() {
      let fahrenheit = 70;
      let celsius = convertFahrenheit2Celsius(fahrenheit);
      expect(celsius.toFixed(0)).toBe("21");
    });
  });