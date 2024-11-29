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
    if (this.root === null) return total;

    const toVisitStack = [this.root];
    while (toVisitStack.length) {
      const current = toVisitStack.pop();
      total += current.val;

      if (current.children.length) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }
    return total;
  }
}

/** countEvens(): count all of the nodes in the tree with even values. */

// countEvens() {
//
// };

/** numGreater(lowerBound): return a count of the number of nodes
 * whose value is greater than lowerBound. */

// numGreater(lowerBound) {
//
// }
// }

module.exports = { Tree, TreeNode };
