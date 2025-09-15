/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    //Formula: [(n+1) * (MaxFreq-1)] + no. of max freq
    let freq = new Array(26).fill(0);
    let maxFreq = 0;

    for (let i = 0; i < tasks.length; i++) {
        let char = tasks[i].charCodeAt() - 65;
        freq[char]++;
        maxFreq = Math.max(maxFreq, freq[char]);
    }

    let countOfMaxFreq = 0;
    for (let i = 0; i < 26; i++) {
        if (freq[i] == maxFreq) countOfMaxFreq++;
    }

    let cycles = ((n + 1) * (maxFreq - 1)) + countOfMaxFreq;

    return Math.max(tasks.length, cycles);

};