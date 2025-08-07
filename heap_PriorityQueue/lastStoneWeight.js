/** 1046
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let result = [];
  let maxHeap = MaxPriorityQueue.fromArray(stones);

  while (maxHeap.size() > 1) {
    let y = maxHeap.dequeue();
    let x = maxHeap.dequeue();

    if (y - x > 0) maxHeap.enqueue(y - x);
  }
  return maxHeap.dequeue() || 0;
};
