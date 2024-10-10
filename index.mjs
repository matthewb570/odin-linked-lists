import LinkedList from "./linkedList.mjs";

let linkedList = new LinkedList();
linkedList.append("dog");
linkedList.append("cat");
linkedList.append("parrot");
linkedList.append("hamster");
linkedList.append("snake");
linkedList.append("turtle");

console.log(linkedList.toString());

// let linkedList = new LinkedList();
// console.log(linkedList.size());
// linkedList.append(5);
// console.log(linkedList.size());
// linkedList.prepend(10);
// console.log(linkedList.size());
// console.log(linkedList.head().value);
// console.log(linkedList.tail().value);
// console.log(linkedList.at(0).value);
// console.log(linkedList.at(1).value);
// console.log(linkedList.at(2));
// console.log(linkedList.contains(5));
// console.log(linkedList.contains(10));
// console.log(linkedList.find(5));
// console.log(linkedList.find(10));
// console.log(linkedList.find(15));
// console.log(linkedList.toString());
// console.log(linkedList.pop());
// console.log(linkedList.contains(5));
// console.log(linkedList.contains(10));
// console.log(linkedList.pop());
// console.log(linkedList.contains(5));
// console.log(linkedList.contains(10));
// console.log(linkedList.pop());
// console.log(linkedList.contains(5));
// console.log(linkedList.contains(10));
// console.log(linkedList.toString());

// linkedList.insertAt(5, 0); // 5
// linkedList.insertAt(10, 0); // 10, 5
// linkedList.insertAt(15, 1); // 10, 15, 5
// linkedList.insertAt(20, 5); // 10, 15, 5, 20
// console.log(linkedList.toString());

// linkedList.removeAt(2); // 10, 15, 20
// console.log(linkedList.toString());
// linkedList.removeAt(5); // 10, 15, 20
// console.log(linkedList.toString());
// linkedList.removeAt(2); // 10, 15
// console.log(linkedList.toString());
// linkedList.removeAt(0); // 15
// console.log(linkedList.toString());
// linkedList.removeAt(0); // null
// console.log(linkedList.toString());
// linkedList.removeAt(0); // null
// console.log(linkedList.toString());