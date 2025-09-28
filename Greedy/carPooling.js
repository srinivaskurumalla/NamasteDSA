/** 1094
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    let locations = new Array(1001).fill(0);//because max trips can be <= 1000

    for (let i = 0; i < trips.length; i++) {
        let [numPassengers, from, to] = trips[i];

        locations[from] += numPassengers;
        locations[to] -= numPassengers;
    }

    //check anywhere we exceeded the capacity of car
    let usedCapacity = 0;

    for (let i = 0; i < 1001; i++) {
        usedCapacity += locations[i];

        if (usedCapacity > capacity) return false;
    }
    return true;
};