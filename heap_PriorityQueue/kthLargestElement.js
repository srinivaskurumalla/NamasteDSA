/** 215
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let minHeap = new MyMinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    minHeap.enqueue(nums[i]);

    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }
  return minHeap.front();
};

class MyMinPriorityQueue {
  constructor() {
    this.minHeap = [];
  }

  enqueue(val) {
    this.minHeap.push(val);
    let lastIdx = this.minHeap.length - 1;
    this.heapifyUp(lastIdx);
    console.log("Enqueue", this.minHeap);
  }

  heapifyUp(i) {
    let curr = i;
    while (curr > 0) {
      let parent = Math.floor((curr - 1) / 2);

      if (this.minHeap[parent] > this.minHeap[curr]) {
        //swap
        [this.minHeap[parent], this.minHeap[curr]] = [
          this.minHeap[curr],
          this.minHeap[parent],
        ];
        curr = parent;
      } else break;
    }
  }

  size() {
    return this.minHeap.length;
  }

  front() {
    return this.minHeap[0];
  }
  dequeue() {
    let last = this.minHeap.pop();
    if (this.size() > 0) {
      this.minHeap[0] = last;
    }

    this.heapifyDown(0);

    console.log("Dequeue", this.minHeap);
  }

  heapifyDown(i) {
    if (this.size() < 1) return null;

    while (true) {
      let smallest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      if (left < this.size() && this.minHeap[left] < this.minHeap[smallest]) {
        smallest = left;
      }
      if (right < this.size() && this.minHeap[right] < this.minHeap[smallest]) {
        smallest = right;
      }

      if (smallest != i) {
        [this.minHeap[smallest], this.minHeap[i]] = [
          this.minHeap[i],
          this.minHeap[smallest],
        ];
        i = smallest;
      } else break;
    }
  }
}

let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
findKthLargest(arr, 4);
