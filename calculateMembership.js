/*Write a function that calculates total cost of a gym membership. A member gets a
    discount according to the number of friends they sign up.
        0 friends: 0% discount
        1 friend: 5% discount
        2 friends: 10% discount
        3 or more friends: 15% discount */ 

        function calculateMembership(baseCost, friend) {
            let totalCost; 

            if (friend === 0) { 
                totalCost = baseCost - (0);
            } else if (friend === 1) {
                totalCost = baseCost - (baseCost * 0.05);
            } else if (friend === 2) {
                totalCost = baseCost - (baseCost * 0.10);
            } else if (friend >= 3) {
                totalCost = baseCost - (baseCost * 0.15);
            }

            return totalCost;
        }


    //console.log(`the total price is ${calculateMembership(50, 2)}`);

    export { calculateMembership }