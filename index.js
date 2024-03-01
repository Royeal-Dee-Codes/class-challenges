class AlternatingSplicer {
  constructor(items) {
    this.items = items;
    this.isRemovingFromEnd = false;
  }

  pop() {
    if (this.items.length === 0) {
      return "";
    }

    if (this.isRemovingFromEnd) {
      this.isRemovingFromEnd = false;
      return this.items.pop();
    } else {
      this.isRemovingFromEnd = true;
      return this.items.shift();
    }
  }
}

const mySplicer = new AlternatingSplicer([1, 2, 3, 4, 5]);
console.log(mySplicer.pop());
console.log(mySplicer.pop());
console.log(mySplicer.pop());
console.log(mySplicer.pop());
console.log(mySplicer.pop());
console.log(mySplicer.pop());
