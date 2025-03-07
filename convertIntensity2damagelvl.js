/*Earthquake strengths are categorized as:

Richter Scale Number	Characterization
n < 5	Little or no damage
5 <= n < 5.5	Some damage
5.5 <= n < 6.5	Serious damage: walls may crack or fall
6.5 <= n < 7.5	Disaster: buildings may collapse
n >= 7.5	Catastrophe: most buildings destroyed
Write a function that determines damage level given earthquake intensity measured
    on the Richter scale. */

    function convertIntensity2damagelvl(intensity){
        let damageLevel;
        if (intensity <5) {
            damageLevel = "Little or no damage";
        } else if (intensity >= 5 && intensity < 5.5 ) {
            damageLevel = "Some damage";
        } else if (intensity >= 5.5 && intensity < 6.5 ) {
            damageLevel = "Serious damage: walls may crack or fall";
        } else if (intensity >= 6.5 && intensity < 7.5 ) {
            damageLevel = "Disaster: buildings may collapse";
        } else if (intensity >= 7.5 ) {
            damageLevel = "Catastrophe: most buildings destroyed";
        } else {  // invalid inputs
            damageLevel = "Richter Scale Number";
        }
        return damageLevel;
    }

    //console.log(` its  ${convertIntensity2damagelvl(6.5)}`);

    export { convertIntensity2damagelvl }