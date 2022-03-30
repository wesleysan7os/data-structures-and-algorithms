/* Sets */
function mySet() {
  // collection that will hold the set
  this.collection = [];

  // check for the presence of an element in the set
  this.has = function(element) {
    return this.collection.indexOf(element) !== -1;
  }

  // return all the values in the set
  this.values = function() {
    return this.collection;
  }

  // add an unique element to the set
  this.add = function(element) {
    if(this.has(element)) {
      return false;
    } else {
      this.collection.push(element);
      return true;
    }
  }

  // remove an element in the set if it exists
  this.remove = function(element) {
    const elementIndex = this.collection.indexOf(element);
    if (elementIndex !== -1) {
      this.collection.splice(elementIndex, 1);
      return true;
    }
    return false; 
  }

  // return the size of the set
  this.size = function() {
    return this.collection.length;
  }

  // return the union of the two sets
  this.union = function(otherSet) {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach(elem => unionSet.add(elem));
    secondSet.forEach(elem => unionSet.add(elem));

    return unionSet;
  }

  // return the intersection of the two sets
  this.intersection = function(otherSet) {
    const intersectionSet = new mySet();
    const firstSet = this.values();

    firstSet.forEach(elem => {
      if (otherSet.has(elem)) {
        intersectionSet.add(elem);
      }
    });
    return intersectionSet;
  }

  // returns the difference of the two sets
  this.difference = function(otherSet) {
    const differenceSet = new mySet();
    const firstSet = this.values();

    firstSet.forEach(elem => {
      if (!otherSet.has(elem)) {
        differenceSet.add(elem);
      }
    });

    return differenceSet;
  }

  // test if the set is a subset of a different set  
  this.subset = function(otherSet) {
    const firstSet = this.values();

    return firstSet.every(elem => otherSet.has(elem));
  }
}

// some tests
const setA = new mySet();
const setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

const setC = new Set();
const setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
