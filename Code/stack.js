/** Node: node for a stack. */
class Node {
  /**
   * Creates a node for use in a stack.
   * @param val The value to store in the node.
   */
  constructor(val) {
    this.val = val;  // Store the passed value in the node.
    this.next = null;  // Initially, 'next' is set to null, indicating no connection to another node yet.
  }
}

/** Stack: chained-together nodes where you can remove from the top or add to the top. */
class Stack {
  /**
   * Initializes a new empty stack.
   */
  constructor() {
    this.first = null;  // Points to the top node in the stack (null if the stack is empty).
    this.last = null;  // Points to the bottom node in the stack (used only for consistency, not essential for stack functionality).
    this.size = 0;  // Tracks the number of nodes in the stack.
  }

  /**
   * Adds a new value to the top of the stack.
   * @param val The value to add to the stack.
   */
  push(val) {
    const newNode = new Node(val);  // Create a new node with the given value.
    if (!this.first) {  // If the stack is currently empty,
      this.first = newNode;  // set both 'first' and 'last' to the new node.
      this.last = newNode;
    } else {
      newNode.next = this.first;  // Link the new node to the previous 'first' node.
      this.first = newNode;  // Update 'first' to the new node, making it the new top of the stack.
    }
    this.size++;  // Increment the size of the stack.
  }

  /**
   * Removes the node from the top of the stack and returns its value.
   * Throws an error if the stack is empty.
   * @returns The value of the node removed from the top of the stack.
   */
  pop() {
    if (!this.first) {  // If the stack is empty,
      throw new Error("Cannot pop from an empty stack");  // throw an error to indicate the stack is empty.
    }
    const temp = this.first;  // Store the current top node.
    this.first = this.first.next;  // Update 'first' to the next node down the stack.
    if (!this.first) {  // If there are no more nodes left in the stack,
      this.last = null;  // reset 'last' to null as well.
    }
    this.size--;  // Decrement the size of the stack.
    return temp.val;  // Return the value of the node that was removed.
  }

  /**
   * Returns the value of the first node in the stack without removing it.
   * @returns The value of the first node if the stack is not empty, otherwise null.
   */
  peek() {
    if (!this.first) {  // If the stack is empty,
      return null;  // return null indicating there are no nodes to peek at.
    }
    return this.first.val;  // Return the value of the top node.
  }

  /**
   * Checks if the stack is empty.
   * @returns True if the stack is empty, false otherwise.
   */
  isEmpty() {
    return this.first == null;  // Return true if 'first' is null (stack is empty), false otherwise.
  }
}

module.exports = Stack;  // Export the Stack class for use in other parts of the application or testing.