// creates a stack
const Stack = function() {
  this.count = 0;
  this.storage = {};

  // adds a item onto the end of the stack
  this.push = function (item) {
    this.storage[this.count++] = item;
  };

  // removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) return undefined;
    const deletedItem = this.storage[--this.count];
    delete this.storage[this.count];
    return deletedItem;
  };

  // returns the last item of the stack without remove it
  this.peek = function () {
    if (this.count === 0) return undefined;
    return this.storage[this.count - 1];
  };

  // returns the number of itens of the stack
  this.size = function () {
    return this.count;
  };
}

// some tests
let stack = new Stack();
stack.push({name: 'wes'});
stack.push({name: 'iara'});
stack.push({name: 'juan'});
console.log(stack.size())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.size())

