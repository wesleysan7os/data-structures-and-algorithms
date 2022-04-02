/* Priority Queue */
function PriorityQueue() {
  collection = [];

  this.print = function() {
    console.log(collection);
  }

  this.enqueue = function(element) {
    let start, middle = 0;
    let end = this.size() - 1;
    let key = element[1];

    while(start <= end) {
      middle = Math.floor(start + end / 2);

      if (collection[middle] === key) {
        break;
      }
      else if (collection[middle] > key) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    collection.splice(middle, 0, element);
  }
  
  this.denqueue = function() {
    const deleteArr = collection.shift();
    return deleteArr[0];
  }

  this.front = function() {
    return collection[0];
  }

  this.size = function() {
    return collection.length;
  }

  this.isEmpty = function() {
    return (this.size() === 0);
  }
}

//some tests
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(['a', 3]);
priorityQueue.enqueue(['b', 2]);
priorityQueue.enqueue(['c', 1]);
priorityQueue.print();
priorityQueue.denqueue();
console.log(priorityQueue.front());
priorityQueue.denqueue();
priorityQueue.denqueue();
console.log(priorityQueue.isEmpty());