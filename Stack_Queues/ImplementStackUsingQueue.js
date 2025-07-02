//225

//Using 2 queues
var MyStack = function () {
    this.q1 = [];
    this.q2 = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */

//remove first element and add it to q2,  n-1 times, remove the last one
//exchange q1 and q2
MyStack.prototype.pop = function () {
    let n = this.q1.length;
    while (n > 1) {
        this.q2.push(this.q1.shift())
        --n;
    }
    let lastElement = this.q1.shift();
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return lastElement;
};

/**
 * @return {number}
 */

//remove first element and add it to q2,  n times, store last element and return
//exchange q1 and q2
MyStack.prototype.top = function () {
    let n = this.q1.length;
    let lastElement = this.q1[0];
    while (n >= 1) {
        lastElement = this.q1.shift();
        this.q2.push(lastElement);
        --n;
    }

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return lastElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    if (this.q1.length === 0) return true;
    else return false;
};

/** 
 * 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


//Using 1 queue



var MyStack = function () {
    this.q1 = [];
    

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let n = this.q1.length;
    while (n > 1) {  //n-1 time
        this.q1.push(this.q1.shift())
        --n;
    }
    let lastElement = this.q1.shift();
   
    return lastElement;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let n = this.q1.length; //n times
    let lastElement = this.q1[0];
    while (n >= 1) {
        lastElement = this.q1.shift();
        this.q1.push(lastElement);
        --n;
    }

   
    return lastElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */