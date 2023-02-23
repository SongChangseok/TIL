# 큐(Queue)

- 데이터 구조의 한 종류로, 일종의 줄(line)이나 대기열(waiting line)을 나타내는 추상적인 개념이다.
- 일반적으로 새로운 요소를 큐의 뒤쪽(rear)에 추가하고, 요소를 처리하거나 제거할 때는 큐의 앞쪽(front)에서 수행한다. 따라서, 가장 먼저 추가된 요소는 가장 먼저 처리된다. 이러한 동작 방식을 `FIFO(First-In, First-Out)`라고 한다.
- 많은 컴퓨터 프로그램에서 사용다. 예를 들어, 운영체제에서는 프로세스 관리를 위해 큐를 사용하며, 네트워크에서는 데이터 패킷을 전송하기 위한 큐가 사용된다. 또한, 자료가 처리되는 순서가 중요한 프로그램에서는 작업을 순서대로 처리하기 위한 큐가 필요할 수 있다.
- `배열(array)`이나 `연결 리스트(linked list)`로 구현된다. `배열`을 사용한 구현에서는 큐의 크기를 미리 지정해야 하며, `연결 리스트`를 사용한 구현에서는 큐의 크기를 동적으로 조정할 수 있다.
- 가장 중요한 연산은 `Enqueue`와 `Dequeue`이다.
  - `Enqueue`는 큐의 뒤쪽에 새로운 요소를 추가하는 연산이다.
  - `Dequeue`는 큐의 앞쪽에서 요소를 제거하는 연산이다.
  - 또한, 큐에서 가장 앞쪽의 요소를 조회하는 `Peek` 연산이 있을 수도 있다.

## 큐 구현

### 배열로 작성한 큐

```jsx
class Queue {
  constructor() {
    this.items = []; // 큐 요소를 저장하기 위한 배열
  }

  // 큐에 요소 추가
  enqueue(element) {
    this.items.push(element);
  }

  // 큐에서 요소 제거 후 반환
  dequeue() {
    if (this.isEmpty()) {
      return "큐가 비어있습니다.";
    }
    return this.items.shift();
  }

  // 큐의 첫 번째 요소 반환
  front() {
    if (this.isEmpty()) {
      return "큐가 비어있습니다.";
    }
    return this.items[0];
  }

  // 큐가 비어있는지 여부 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 큐에 저장된 요소 개수 반환
  size() {
    return this.items.length;
  }

  // 큐에 저장된 모든 요소 제거
  clear() {
    this.items = [];
  }
}
```

### 연결 리스트로 구현한 큐

```jsx
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // 큐의 가장 앞에 있는 노드
    this.rear = null; // 큐의 가장 뒤에 있는 노드
    this.size = 0; // 큐의 크기
  }

  // 큐에 요소 추가
  enqueue(data) {
    const newNode = new Node(data);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  // 큐에서 요소 제거 후 반환
  dequeue() {
    if (!this.front) {
      return "큐가 비어있습니다.";
    }
    const removedNode = this.front;
    this.front = this.front.next;
    this.size--;
    return removedNode.data;
  }

  // 큐의 첫 번째 요소 반환
  peek() {
    if (!this.front) {
      return "큐가 비어있습니다.";
    }
    return this.front.data;
  }

  // 큐가 비어있는지 여부 확인
  isEmpty() {
    return this.size === 0;
  }

  // 큐에 저장된 요소 개수 반환
  getSize() {
    return this.size;
  }

  // 큐에 저장된 모든 요소 제거
  clear() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
}
```

### 배열 VS 연결 리스트

1. **삽입/삭제 연산의 속도**: `배열`은 인덱스를 이용하여 요소에 접근하기 때문에 삽입/삭제 연산이 일어날 때마다 요소들을 이동시켜야 한다. 이는 성능상의 이슈가 될 수 있다. 반면에 `연결 리스트`는 새로운 요소를 추가할 때마다 단순히 링크를 조정하기만 하면 되므로 삽입/삭제 연산이 빠르다.
2. **메모리 공간의 확보**: `배열`은 고정된 크기의 메모리를 미리 할당받아 사용하기 때문에 크기가 고정되어 있다. 반면에 `연결 리스트`는 노드가 동적으로 생성되어 추가될 때마다 필요한 만큼의 메모리 공간을 할당받는다. 이로 인해 크기가 동적으로 조정될 수 있다.
3. **요소 접근 시간**: `배열`은 인덱스를 이용하여 요소에 접근하기 때문에 요소 접근 시간이 매우 빠르다. 반면에 `연결 리스트`는 요소를 찾기 위해서는 처음부터 끝까지 탐색해야 하므로 요소 접근 시간이 더 오래 걸린다.

<aside>
💡 따라서, 삽입/삭제가 빈번하게 일어나는 경우에는 `연결 리스트`를 사용하는 것이 유리하다. 반면에 요소 접근이 많은 경우에는 `배열`을 사용하는 것이 더 효율적이다.

</aside>
