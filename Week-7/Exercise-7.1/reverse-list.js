var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

/* Function to reverse the linked list */
function reverse(node) {
  let prev = null;
  let current = node;
  let next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}

function display(node) {
 let str = "";
  while (node != null) {
    str = node.data + " -> " + str;
    node = node.next;
  }
  console.log(str);
}

function push(data) {
  let temp = new Node(data);
  temp.next = head;
  head = temp;
}

push(10);
push(20);
push(30);
push(40);
push(50);

console.log("Given Linked list :");
display(head);
head = reverse(head);
console.log("\nReversed linked list :");
display(head);

//Time Complexity: O(N) 
//Auxiliary Space: O(1)