import { convertIntensity2damagelvl } from '../convertIntensity2damagelvl.js'

describe("If has 1 friend", function() {
    it("What is the Earthquake damage lvl is it is 4 in Richter Scale?", function() {
      let intensity = 4;
      let damageLevel = convertIntensity2damagelvl(intensity);
      expect(damageLevel).toBe("Little or no damage");
    });
  });


  describe("If has 1 friend", function() {
    it("What is the Earthquake damage lvl is it is 5.2 in Richter Scale?", function() {
      let intensity = 5.2;
      let damageLevel = convertIntensity2damagelvl(intensity);
      expect(damageLevel).toBe("Some damage");
    });
  });

  describe("If has 1 friend", function() {
    it("What is the Earthquake damage lvl is it is 6.1 in Richter Scale?", function() {
      let intensity = 6.1;
      let damageLevel = convertIntensity2damagelvl(intensity);
      expect(damageLevel).toBe("Serious damage: walls may crack or fall");
    });
  });

  describe("If has 1 friend", function() {
    it("What is the Earthquake damage lvl is it is 7.6 in Richter Scale?", function() {
      let intensity = 7.6;
      let damageLevel = convertIntensity2damagelvl(intensity);
      expect(damageLevel).toBe("Catastrophe: most buildings destroyed");
    });
  });