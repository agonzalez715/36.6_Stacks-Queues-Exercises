/** Node: node for a queue. */
class Node {
  /**
   * Creates a node for use in a queue.
   * @param val The value to store in the node.
   */
  constructor(val) {
    this.val = val;  // Store the passed value in the node.
    this.next = null;  // Initially, 'next' is set to null, indicating no connection to another node yet.
  }
}

/** Queue: chained-together nodes where you can remove from the front or add to the back. */
class Queue {
  /**
   * Initializes a new empty queue.
   */
  constructor() {
    this.first = null;  // Points to the first node of the queue (null if the queue is empty).
    this.last = null;  // Points to the last node of the queue (null if the queue is empty).
    this.size = 0;  // Tracks the number of nodes in the queue.
  }

  /**
   * Adds a new value to the end of the queue.
   * @param val The value to add to the queue.
   */
  enqueue(val) {
    const newNode = new Node(val);  // Create a new node with the given value.
    if (!this.first) {  // If the queue is currently empty,
      this.first = newNode;  // Set 'first' and 'last' to the new node.
      this.last = newNode;
    } else {
      this.last.next = newNode;  // Link the new node to the current 'last' node.
      this.last = newNode;  // Update 'last' to the new node, making it the new end of the queue.
    }
    this.size++;  // Increment the size of the queue.
  }

  /**
   * Removes the node from the start of the queue and returns its value.
   * Throws an error if the queue is empty.
   * @returns The value of the node removed from the front of the queue.
   */
  dequeue() {
    if (!this.first) {  // If the queue is empty,
      throw new Error("Cannot dequeue from an empty queue");  // Throw an error to indicate the queue is empty.
    }
    const temp = this.first;  // Store the current first node.
    this.first = this.first.next;  // Update 'first' to the next node in the queue.
    if (!this.first) {  // If there are no more nodes left in the queue,
      this.last = null;  // Reset 'last' to null as well.
    }
    this.size--;  // Decrement the size of the queue.
    return temp.val;  // Return the value of the node that was removed.
  }

  /**
   * Returns the value of the first node in the queue without removing it.
   * @returns The value of the first node if the queue is not empty, otherwise null.
   */
  peek() {
    if (!this.first) {  // If the queue is empty,
      return null;  // Return null indicating there are no nodes to peek at.
    }
    return this.first.val;  // Return the value of the first node.
  }

  /**
   * Checks if the queue is empty.
   * @returns True if the queue is empty, false otherwise.
   */
  isEmpty() {
    return this.first == null;  // Return true if 'first' is null (queue is empty), false otherwise.
  }
}

module.exports = Queue;  // Export the Queue class for use in other parts of the application or testing.