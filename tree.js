/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let total = 0;
    // If the tree is empty return 0
    if (this.root === null) return total;

    const toVisitStack = [this.root];
    while (toVisitStack.length) {
      const current = toVisitStack.pop();
      total += current.val;

      // Add the children to the stack
      if (current.children.length) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let totalEvens = 0;

    // If the tree is empty return 0
    if (this.root === null) return totalEvens;

    const toVisitStack = [this.root];
    while (toVisitStack.length) {
      const current = toVisitStack.pop();
      if (current.val % 2 === 0) {
        totalEvens++;
      }

      // Add the children to the stack
      if (current.children.length) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }
    return totalEvens;
  }
  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let totalGreater = 0;

    // If the tree is empty return 0
    if (this.root === null) return totalGreater;

    const toVisitStack = [this.root];
    while (toVisitStack.length) {
      const current = toVisitStack.pop();
      if (current.val > lowerBound) {
        totalGreater++;
      }

      // Add the children to the stack
      if (current.children.length) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }
    return totalGreater;
  }
}

module.exports = { Tree, TreeNode };
