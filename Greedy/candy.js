/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let n = ratings.length;

    let ans = n;
    let i = 1;

    while(i<n){

        //if ratings are equal 
        if(ratings[i] == ratings [i-1]){
            i++;
            continue;
        }

        //up trennd
        let up = 0;
        while(i<n && ratings[i] > ratings [i-1]){
            up++;
            ans += up;
            i++;
        }

        //down trend
        let down = 0;
        while (i < n && ratings[i] < ratings [i-1]){
            down++;
            ans += down;
            i++;
        }

        //remove lesser value on peaks
        ans = ans - Math.min (up, down);
    }

    return ans;
};
