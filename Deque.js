function createNode(value) {
  return {
    value: value,
    next: null,
    previous: null,
  };
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  offerLast(value) {
    this.length++;
    let newNode = createNode(value);

    if (this.tail) {
      // list is not empty
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  popLast() {
    if (this.tail) {
      this.length--;

      const removedTail = this.tail;

      this.tail = this.tail.previous;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }

      return removedTail;
    }
    return undefined;
  }

  peekLast() {
    return this?.tail?.value;
  }

  offerFirst(value) {
    this.length++;
    let newNode = createNode(value);

    if (this.head) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  popFirst() {
    if (this.head) {
      this.length--;
      const removedHead = this.head;
      this.head = this.head.next;

      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }

      return removedHead;
    }
    return undefined;
  }

  peekFirst() {
    return this?.head?.value;
  }
}
