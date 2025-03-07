import { convertMeter2VolCubicM } from '../convertMeter2VolCubicM.js'

describe("A suite", function() {
    it("What is the volume of the cube in cubic meters if the height is 10.?", function() {
      let height = 10;
      let cubeVolume = convertMeter2VolCubicM(height);
      expect(cubeVolume).toBe(1000);
    });
  });


  describe("A suite", function() {
    it("What is the volume of the cube in cubic meters if the height is 5?", function() {
      let height = 5;
      let cubeVolume = convertMeter2VolCubicM(height);
      expect(cubeVolume).toBe(125);
    });
  });

  describe("A suite", function() {
    it("What is the volume of the cube in cubic meters if the height is 5?", function() {
      let height = 8;
      let cubeVolume = convertMeter2VolCubicM(height);
      expect(cubeVolume).toBe(512);
    });
  });