class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  // enQueue will be before inserting into stack1 pop everything into stack2
  // then push into stack1 and pop everything from stack2 back to stack1
  enQueue(x) {
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(x);

    while (this.stack2.length != 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  // deQueue will be just pop from stack1
  deQueue() {
    if (this.stack1.length == 0) {
      return -1;
    }
    let num = this.stack1[this.stack1.length - 1];
    this.stack1.pop();
    return num;
  }
}

let que = new Queue();
//let arr = [1, 2, 1, 3, 2, 1, 4, 2]
let arr = [1, 2, 2, 2, 1, 4];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 1) {
    que.enQueue(arr[i + 1]);
    i++;
  } else if (arr[i] == 2) {
    console.log(que.deQueue());
  }
}

//Time Complexity: push -> O(N)   pop -> O(1)
//Auxiliary Space: O(N)
