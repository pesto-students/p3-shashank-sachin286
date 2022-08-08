class Node {
  constructor(val) {
    this.data = val;
    this.left = this.right = null;
  }
}

let root = null;

function printLevelOrder() {
  var h = height(root);
  var i;
  for (i = 1; i <= h; i++) {
    printCurrentLevel(root, i);
    console.log("loop");
  }
}

function height(root) {
  if (root == null) {
    return 0;
  } else {
    var lheight = height(root.left);
    var rheight = height(root.right);

    if (lheight > rheight) {
      return lheight + 1;
    } else {
      return rheight + 1;
    }
  }
}

function printCurrentLevel(root, level) {
  if (root == null) {
    return;
  }
  if (level == 1) {
    console.log(root.data + " ");
    console.log("node ---", root);
  } else if (level > 1) {
    printCurrentLevel(root.left, level - 1);
    printCurrentLevel(root.right, level - 1);
  }
}

root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);
root.left.left = new Node(10);

console.log("Level order traversal of  binary tree is ");
printLevelOrder();
