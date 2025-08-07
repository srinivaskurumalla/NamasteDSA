class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    Enqueue(val, priority) {
        this.queue.push({ val, priority });
        this.queue.sort((a, b) => b.Priority - a.Priority);//Highest priority first
    }

    Deque() {
        if (!this.isEmpty()) {
            return this.queue.shift();
        }
    }

    Peek() {
        if (!this.isEmpty()) {
            return this.queue[0];
        }
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

const pq = new PriorityQueue();
pq.Enqueue("Fever", 1);
pq.Enqueue("Accident", 5);
pq.Enqueue("Headache", 2);

console.log(pq.Peek());
console.log(pq.Peek());