# 연결 리스트(Linked List)

## 단일 연결 리스트(Singly Linked List)

- 각 노드가 다음 노드의 주소를 가지는 링크드 리스트의 한 유형이다.
- 각 노드가 데이터와 한 개의 포인터(pointer)를 가지는 구조로 구성된다. 포인터는 다음 노드의 주소를 가리키고, 마지막 노드의 포인터는 더 이상의 노드가 없음을 나타내는 NULL 값을 가진다.
- 장단점으로는, 삽입과 삭제 연산이 매우 효율적이고, 데이터의 크기에 상관없이 메모리 공간을 효율적으로 사용할 수 있지만, 중간에 있는 요소를 찾는 것이 어렵다는 것이 있다.
- `헤드(head)`와 `테일(tail)`은 단일 연결 리스트의 첫 번째 노드와 마지막 노드를 가리키는 포인터를 가지고 있으며, 이 포인터를 통해서 단일 연결 리스트의 처음과 끝에 노드를 추가하거나 삭제할 수 있다.

## 용도

1. 데이터 순서 관리: 단일 연결 리스트는 데이터의 순서가 중요한 경우에 유용하다. 노드를 추가하거나 삭제할 때, 데이터의 순서를 유지할 수 있어서 새로운 데이터를 순서에 맞게 추가할 수 있다.
2. 데이터 탐색: 단일 연결 리스트는 원하는 데이터를 탐색할 때 효율적이다. 헤드에서 시작하여 노드를 하나씩 탐색할 수 있어서, 원하는 데이터를 찾을 때까지 탐색할 수 있다.
3. 메모리 효율성: 단일 연결 리스트는 데이터의 개수가 많지 않은 경우에 메모리 효율성이 높다. 데이터의 개수가 많아지면, 다른 데이터 구조에 적합한 경우도 있지만, 단일 연결 리스트는 각 노드가 단 하나의 데이터만 가지므로 메모리 사용이 적기 때문에 메모리 효율성이 높은 편이다.
4. 동적 데이터 구조: 단일 연결 리스트는 데이터의 개수가 동적으로 변할 수 있는 경우에 유용하다. 데이터를 추가하거나 삭제할 때, 메모리를 동적으로 할당하거나 해제할 수 있어서 프로그램의 효율성을 높일 수 있다.

```jsx
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
```

## 이중 연결 리스트(Doubly Linked List)

- 이중 연결 리스트(doubly linked list)는 각 노드(node)가 데이터(data)와 두 개의 포인터(pointer)를 가지는 선형 자료구조(linear data structure)이다.
- 각 노드가 이전 노드와 다음 노드를 가리키는 두 개의 포인터를 가지기 때문에, 양방향으로 탐색할 수 있는 장점이 있다.
- 예를 들어, 이중 연결 리스트에서는 노드를 추가할 때 해당 노드의 이전 노드와 다음 노드를 연결하면 되기 때문에, 단일 연결 리스트보다 더욱 쉽게 추가할 수 있다. 또한, 양방향으로 탐색할 수 있기 때문에 노드를 탐색하는 경우에도 단일 연결 리스트보다 더욱 빠르게 탐색할 수 있습니다.

```jsx
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;

    return removedNode;
  }
}
```

## 단일 연결 리스트와 이중 연결 리스트의 비교

단일 연결 리스트와 이중 연결 리스트는 모두 연결 리스트(linked list)라는 자료구조를 사용하며, 노드(node)들이 포인터(pointer)를 통해 연결되어 있다. 그러나 두 자료구조는 각각 다른 특징을 가지고 있다.

1. 포인터의 개수
   - `단일 연결 리스트`는 각 노드가 **다음 노드를 가리키는 포인터**만을 가지고 있다.
   - `이중 연결 리스트`는 각 노드가 **이전 노드와 다음 노드를 가리키는 두 개의 포인터**를 가지고 있다.
2. 탐색 속도
   - `단일 연결 리스트`는 각 노드가 다음 노드만을 가리키므로, **다음 노드로의 순차적인 탐색만 가능**하다.
   - `이중 연결 리스트`는 각 노드가 이전 노드와 다음 노드를 가리키므로, **양방향으로 탐색이 가능**하다. 이에 따라 특정 노드를 찾는데 걸리는 시간이 단일 연결 리스트보다 더욱 빠르다.
3. 삽입 및 삭제 속도
   - `단일 연결 리스트`는 각 노드가 다음 노드를 가리키는 포인터만을 가지고 있으므로, 특정 노드를 삭제하거나 새로운 노드를 삽입할 때, **이전 노드를 찾는 데 시간이 걸린다.**
   - `이중 연결 리스트`는 각 노드가 이전 노드와 다음 노드를 가리키므로, 특정 노드를 삭제하거나 새로운 노드를 삽입할 때, **이전 노드와 다음 노드를 모두 찾을 필요가 없다.** 따라서 삽입 및 삭제 속도가 더욱 빠르다.
4. 메모리 사용량
   - `단일 연결 리스트`는 각 노드가 다음 노드를 가리키는 포인터만을 가지고 있으므로, 포인터의 개수가 적어 **메모리 사용량이 적다.**
   - `이중 연결 리스트`는 각 노드가 이전 노드와 다음 노드를 가리키는 두 개의 포인터를 가지고 있으므로, 포인터의 개수가 더 많아 **메모리 사용량이 더 크다.**

- 따라서, `단일 연결 리스트`는 메모리 사용량이 적고 탐색속도가 빠른 편이지만 삽입 및 삭제 시 이전 노드를 찾아야 하므로 시간이 걸린다.
- 이에 반해, `이중 연결 리스트`는 메모리 사용량이 더 많고 포인터의 개수가 더 많아서 메모리 오버헤드가 있을 수 있다. 그러나 양방향 탐색이 가능하고 삽입 및 삭제 시 이전 노드와 다음 노드를 찾지 않아도 되므로, 시간 면에서는 `단일 연결 리스트`보다 빠르다.
- 따라서, 연결 리스트를 사용할 때는 사용하는 목적에 따라 `단일 연결 리스트`와 `이중 연결 리스트` 중에서 적합한 것을 선택하여 사용해야 한다. 예를 들어, 삽입 및 삭제가 빈번하게 일어나는 경우에는 `이중 연결 리스트`를 사용하는 것이 유리하다. 반면에, 메모리를 적게 사용하고 탐색이 주된 작업인 경우에는 `단일 연결 리스트`를 사용하는 것이 좋다.
