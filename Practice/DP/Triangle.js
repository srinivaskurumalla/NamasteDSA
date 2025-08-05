//120
//1. I though of going from top to down of triangle but thrown wrong output.

var minimumTotal = function (triangle) {
    let j = 0;
    let minSum = triangle[0][j];

    for (let i = 1; i < triangle.length; i++) {
        let min = triangle[i][j] < triangle[i][j + 1] ? j : j + 1;
        minSum += triangle[i][min];
        j = min;
    }
    return minSum;

};

//2. After dry running failed test case, thought of taking it from bottom to up

var minimumTotal = function (triangle) {


    //find min val index of last row

    let lastRow = triangle[triangle.length - 1];
    let min = lastRow[0];
    let j = 0;
    for (let i = 1; i < lastRow.length; i++) {
        j = lastRow[j] < lastRow[i] ? j : i;
    }
    let minSum = lastRow[j];
    //Traverse triangle in reverse order,we can exclude lastrow

    for (let i = triangle.length - 2; i >= 0; i--) {
        if (j === 0) {
            minSum += triangle[i][j];
        }
        else {
            let min = triangle[i][j] < triangle[i][j - 1] ? j : j - 1;
            minSum += triangle[i][min];
            j = min;
        }
    }
    return minSum;

};

//3. though of missing some edge cases so,

var minimumTotal = function (triangle) {


    //find min val index of last row

    let lastRow = triangle[triangle.length - 1];
    let min = lastRow[0];
    let j = 0;
    for (let i = 1; i < lastRow.length; i++) {
        j = lastRow[j] <= lastRow[i] ? j : i;
    }
    let minSum = lastRow[j];
    //Traverse triangle in reverse order,we can exclude lastrow

    for (let i = triangle.length - 2; i >= 0; i--) {
        if (j === 0) {
            minSum += triangle[i][j];
        } else if (j === triangle[i].length) {
            minSum += triangle[i][j - 1];
            j = j - 1;
        }
        else {
            let min = triangle[i][j] < triangle[i][j - 1] ? j : j - 1;
            minSum += triangle[i][min];
            j = min;
        }
    }
    return minSum;

};

//4. Found it can be solved by Dynamic Programming Bottom Up approach
var minimumTotal = function (triangle) {

    //Dynamic programming Bottom Up

    //start from second last row, go up wards
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];

};
