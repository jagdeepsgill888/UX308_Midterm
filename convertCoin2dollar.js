/* Write a function that calculates the total value of a set of coins in dollars. */

function convertCoin2dollar(Nickel,Dime, Quarter, Loonie, Toonie) {
    let InNickel = 0.05 * (Nickel);
    let Indime =    0.10 * (Dime);
    let InQuarter = 0.25 * (Quarter);
    let InLoonie = 1.00 * (Loonie);
    let InToonie = 2.00 * (Toonie);
    let TotalDollar = InNickel + Indime + InQuarter + InLoonie + InToonie;
    
    return TotalDollar;
}
export { convertCoin2dollar }
//console.log(`The total is ${convertCoin2dollar(1, 2, 3, 4, 5)} dollars`);