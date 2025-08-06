
class minHeap {
    constructor() {
        //this.heap = [5, 10, 20, 30];
        this.heap = [];
    }

    getLeftChildIndex(i) {
        return (2 * i) + 1;
    }
    getRightChildIndex(i) {
        return (2 * i) + 2;
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    insert(val) {
        this.heap.push(val);
        let lastIdx = this.heap.length - 1;
        this.heapifyUp(lastIdx)
    }

    heapifyUp(i) {
        while (i > 0) {
            //check if parent val is less or equal to val
            let parentIdx = this.getParentIndex(i);
            if (this.heap[parentIdx] > this.heap[i]) {
                //swap

                [this.heap[parentIdx], this.heap[i]] = [this.heap[i], this.heap[parentIdx]];


                i = parentIdx;

            }
            else {
                break;
            }
        }
    }


    //extrace root val and apply heaify down
    extract() {
        let removed = this.heap[0];

        //swap
        let lastIdx = this.heap.length - 1;
        [this.heap[0], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[0]]

        this.heap.pop();
        this.heapifyDown(0);

        return removed;
    }

    heapifyDown(i) {
        if (this.heap.length < 1) return null;
        while (true) {
            let leftChild = this.getLeftChildIndex(i);
            let rightChild = this.getRightChildIndex(i);

            let n = this.heap.length;
            let small = i;
            //Find the smallest among 3 nodes
            if (leftChild < n && this.heap[leftChild] < this.heap[small]) {
                small = leftChild;
            }

            if (rightChild < n && this.heap[rightChild] < this.heap[small]) {
                small = rightChild;
            }


            if (small != i) {
                //swap with min child
                [this.heap[i], this.heap[small]] = [this.heap[small], this.heap[i]];

                i = small;

            } else {
                break;
            }

        }

    }

    peek() {
        if (!this.heap.length) return null;
        return this.heap[0];
    }
}

let heap = new minHeap();

heap.insert(5);
heap.insert(20);
heap.insert(4);
heap.insert(10);
heap.insert(1);
heap.insert(0);

console.log(heap.peek());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.peek());

console.log(heap)
