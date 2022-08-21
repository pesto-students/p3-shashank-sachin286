class Node {
  constructor(val) {
    this.value = val;
    this.left = this.right = null;
  }
}

let root;
function maxDepth(node) {
  if (node == null) {
    return -1;
  } else {
    let left = maxDepth(node.left);
    let right = maxDepth(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
}

root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(15);
root.left.right = new Node(7);
root.left.left.left = new Node(15);

console.log("Height of tree is : " + maxDepth(root));
