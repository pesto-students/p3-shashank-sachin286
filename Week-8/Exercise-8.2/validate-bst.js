class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

let root;

function validBST(node, min, max) {
  if (node == null) {
    return true;
  }

  if (node.data < min || node.data > max) {
    return false;
  }

  return (
    validBST(node.left, min, node.data - 1) &&
    validBST(node.right, node.data + 1, max)
  );
}

root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

if (validBST(root, Number.MIN_VALUE, Number.MAX_VALUE)) {
  console.log("Valid Binary Tree :)");
} else {
  console.log("Not a Valid Binary Tree :(");
}
