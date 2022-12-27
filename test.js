//  For, While, Continue, If, Else, Switch

// For loop
for (let index = 0; index < 5; index++) {
    console.log(index);
}

// While loop
let index = 0;
while (index < 5) {
    console.log(index);
    index++;
}

// Continue statement
for (let index = 0; index < 5; index++) {
    if (index % 2 === 0) {
        continue;
    }
    console.log(index);
}

// If, Else
const x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}

// Switch (using case)
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}




//  Recursion


// Factorial function using recursion
function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));  // prints 120 (5 x 4 x 3 x 2 x 1)




//  Binary Search Tree

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

  /*    9
       /  \
      4   20
     / \  /  \
    1   6 15  170   */



//  Closure

function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    }
}

const closure = outerFunction(5);
console.log(closure(6));



/* Write an implementation of getElementByld,
 which performs the same basic task as that of actual getElementByld, 
 (don't use shortcuts like query selector) */


function getElementByld(ld) {
    var elements = document.getElementsByTagName('*');

    for (let index = 0; index < elements.length; index++) {
        let element = elements[index];

        if (element.getAttribute('ld') === ld) {
            return element;
        }
    }

    return null;
}


/* Given a number x, find out if it is a prime number or not,
 use javascript and find out the difference between Next prime number after X and X */

function findNextPrime(x) {
    // Check if x is a prime number
    let isPrime = true;
    if (x <= 1) {
        isPrime = false;
    } else {
        for (let index = 2; index < x; index++) {
            if (x % index === 0) {
                isPrime = false;
                break;
            }
        }
    }

    function isPrimeNumber(x) {
        if (x <= 1) {
            return false;
        }
        for (let index = 2; index < x; index++) {
            if (x % index === 0) {
                return false;
            }
        }
        return true;
    }

    // If x is a prime number, return the difference between the next prime number and x
    if (isPrime) {
        let nextPrime = x + 1;
        while (!isPrimeNumber(nextPrime)) {
            nextPrime++;
        }
        return nextPrime - x;
    }

    // If x is not a prime number, return null
    return null;
}

console.log(findNextPrime(3));