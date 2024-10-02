import Node from "./node.mjs";

class LinkedList {
    headNode;
    tailNode;

    append(value) {
        if (this.headNode == null) {
            this.headNode = new Node(value);
            this.tailNode = this.headNode;
        } else {
            this.tailNode.nextNode = new Node(value);
        }
    }

    prepend(value) {
        if (this.headNode == null) {
            this.headNode = new Node(value);
            this.tailNode = this.headNode;
        } else {
            let newNode = new Node(value, this.headNode);
            this.headNode = newNode;
        }
    }

    size() {
        let currentNode = this.headNode;
        let count = 0;
        while (currentNode != null) {
            currentNode = currentNode.nextNode;
            count++;
        }

        return count;
    }

    head() {
        return this.headNode;
    }

    tail() {
        return this.tailNode;
    }

    at(index) {
        let currentNode = this.headNode;
        let count = 0;
        while (currentNode != null && count !== index) {
            currentNode = currentNode.nextNode;
            count++;
        }

        if (count !== index) {
            return null;
        }

        return currentNode;
    }
}

export default LinkedList;