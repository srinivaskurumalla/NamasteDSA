/** 347
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    //Find frrq using map
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }

    //Add map to the Min priority Queue and maintain K size
    let minHeap = new MinPriorityQueue(x => x.freq);
    for (let key in map) {

        minHeap.enqueue({ val: key, freq: map[key] });
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }
    return minHeap.toArray().map(x => Number(x.val));
};