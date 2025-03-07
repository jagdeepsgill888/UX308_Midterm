/*3) Write a function that converts the height of a cube  in meters to the volume of the cube in cubic meters. Test at least 3 volumes*/

function convertMeter2VolCubicM(height) {
    let cubeVolume = (Math.pow(height, 3));
    return cubeVolume;
}

//console.log(`the volume of the cube in cubic meters is ${convertMeter2VolCubicM(10)}`);

export { convertMeter2VolCubicM }