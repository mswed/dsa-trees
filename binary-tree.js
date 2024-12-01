/** BinaryTreeNode: node for a general tree. */
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(val) {
    // Add a node to the end of the queue
    // Create a new node
    const newNode = new Node(val);
    if (!this.head) {
      // This is the first node in the queue
      this.head = newNode;
      this.tail = newNode;
    }
    // The current tail needs to point to the new node (which is sometimes the head too!)
    this.tail.next = newNode;
    // Now the tail itself needs to be set to the new node
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    // Remove the first node in the queue
    // Get the current head
    const dequedNode = this.head;

    if (this.head === this.tail) {
      // Empty the queue
      this.head = null;
      this.tail = null;
    } else {
      // Set the head to be the next node
      this.head = dequedNode.next;
    }

    this.length--;
    return dequedNode;
  }
  traverse() {
    // Traverse through the queue (useful for debugging)
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
}

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let minDepth = 0;
    // If the tree is empty return 0
    if (this.root === null) return 0;

    const toVisitQueue = new Queue();
    toVisitQueue.enqueue(this.root);
    minDepth++;

    while (toVisitQueue.length) {
      const current = toVisitQueue.dequeue();
      if (current.val.left === null && current.val.right === null) {
        // We found a leaf node return the min depth
        return minDepth;
      }

      // Add the children to the stack
      if (current.val.left) {
        toVisitQueue.enqueue(current.val.left);
      }

      if (current.val.right) {
        toVisitQueue.enqueue(current.val.right);
      }

      minDepth++;
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let maxDepth = 0;
    // If the tree is empty return 0
    if (this.root === null) return 0;

    const toVisitQueue = new Queue();
    toVisitQueue.enqueue(this.root);
    maxDepth++;

    while (toVisitQueue.length !== 0) {
      const current = toVisitQueue.dequeue();

      // Add the children to the stack
      if (current.val.left) {
        toVisitQueue.enqueue(current.val.left);
      }

      if (current.val.right) {
        toVisitQueue.enqueue(current.val.right);
      }

      if (current.val.left || current.val.right) {
        maxDepth++;
      }
    }
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sum = 0;
    const recursiveSum = (node) => {
      console.log('PROCESSING NODE:', node);
      if (node === null) return 0; // break if tree is empty
      console.log(`PROCESSING ${node.val} LEFT BRANCH:`, node.left);
      const left = recursiveSum(node.left); // Calculate the sum from the left node
      console.log(`SUM OF ${node.val} LEFT BRANCH IS:`, left);
      console.log(`PROCESSING ${node.val} RIGHT BRANCH:`, node.right);
      const right = recursiveSum(node.right); // calcualte the sum from the right node
      console.log(`SUM OF ${node.val} RIGHT BRANCH IS:`, right);

      sum = Math.max(sum, node.val + left + right); // The new sum is either the current one or the sum of the entire mini tree we are processing
      console.log('SUM IS NOW:', sum);

      console.log('RETURNING:', Math.max(0, node.val + left, node.val + right));
      return Math.max(0, node.val + left, node.val + right);
    };

    recursiveSum(this.root);
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let largest = null;
    // If the tree is empty return null
    if (this.root === null) return null;

    const toVisitQueue = new Queue();
    toVisitQueue.enqueue(this.root);

    while (toVisitQueue.length) {
      const current = toVisitQueue.dequeue();
      if (current.val.val > lowerBound) {
        if (largest === null) {
          largest = current.val.val;
        }
        largest = Math.min(largest, current.val.val);
      }

      // Add the children to the stack
      if (current.val.left) {
        toVisitQueue.enqueue(current.val.left);
      }

      if (current.val.right) {
        toVisitQueue.enqueue(current.val.right);
      }
    }

    if (largest === 0) return null;
    return largest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
