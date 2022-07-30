let head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function rotate(k) {
  if (k == 0) {
    return;
  }
  var current = head;
  var count = 1;
  while (count < k && current != null) {
    current = current.next;
    count++;
  }
  if (current == null) {
    return;
  }
  var kthNode = current;

  while (current.next != null) {
    current = current.next;
  }
  current.next = head;
  head = kthNode.next;
  kthNode.next = null;
}

function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

function displayList() {
  var temp = head;
  let str = "";
  while (temp != null) {
    str += temp.data + " -> ";
    temp = temp.next;
  }
  console.log(str);
}

push(10);
push(20);
push(30);
push(40);
push(50);
push(60);

console.log("Given list");
displayList();

rotate(3);

console.log("Rotated Linked List");
displayList();

//Time Complexity: O(N)
//Auxiliary Space: O(1)
