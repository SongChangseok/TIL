# 스택(Stack)

- 데이터를 일시적으로 저장하기 위한 자료구조 중 하나로, 데이터를 쌓아 올리듯이 저장하고, 가장 최근에 저장한 데이터를 가장 먼저 꺼내는**(LIFO, Last-In-First-Out)** 방식을 따른다.
- 주로 함수 호출, 수식 계산, 재귀 알고리즘 등에서 사용된다.
- 스택은 일반적으로 다음과 같은 두 가지 연산을 지원한다.
  1. Push: 스택의 맨 위에 데이터를 추가
  2. Pop: 스택의 맨 위에 있는 데이터를 꺼내 반환
- 스택은 맨 위의 데이터에만 접근할 수 있고, 그 아래의 데이터에는 직접 접근할 수 없다. 이러한 특성 때문에, 스택에서 데이터를 꺼내기 위해서는 스택에 저장된 데이터를 모두 꺼내야 한다.

## 스택 구현

- 스택은 일반적으로 `배열(Array)`이나 `연결 리스트(Linked List)`를 이용하여 구현된다.
- 자바스크립트에서 스택(Stack)을 구현할 때, 연결 리스트와 배열 중 어떤 것을 사용할지는 **사용 용도와 데이터의 크기 등에 따라 다르게 결정**될 수 있다.

### 배열로 구현한 스택

- `배열`을 이용한 스택 구현의 경우, 자바스크립트에서 기본적으로 제공되는 배열(Array)을 이용하여 구현할 수 있다. 배열의 특성상 인덱스를 이용하여 데이터에 접근할 수 있기 때문에, **상대적으로 빠르고 간단한 구현이 가능**하다. 또한 자바스크립트의 배열은 동적으로 크기가 조절되기 때문에, 스택에서 **데이터의 추가와 삭제가 빈번하게 일어날 경우에도 유용**하다.

  ```jsx
  class Stack {
    constructor() {
      this.items = [];
    }

    push(element) {
      this.items.push(element);
    }

    pop() {
      if (this.items.length === 0) {
        return "스택이 비어있습니다.";
      } else {
        return this.items.pop();
      }
    }

    peek() {
      return this.items[this.items.length - 1];
    }

    isEmpty() {
      return this.items.length === 0;
    }

    size() {
      return this.items.length;
    }

    print() {
      console.log(this.items.toString());
    }
  }
  ```

### 연결 리스트로 구현한 스택

- `연결 리스트`를 이용한 스택 구현의 경우, 스택의 **크기가 동적으로 조절되는 경우에 유용**하다. 연결 리스트는 포인터를 이용하여 노드와 노드를 연결하기 때문에, 스택에서 데이터를 추가하거나 삭제할 때 데이터를 이동시키는 것이 아니라 단순히 **포인터를 조작하기 때문에 상대적으로 빠른 속도**를 가진다. 하지만 자바스크립트에서 기본적으로 제공되는 연결 리스트는 없기 때문에, **직접 구현**해야 한다.

  ```jsx
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }

    push(value) {
      const newNode = new Node(value);
      if (!this.top) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
      this.size++;
    }

    pop() {
      if (!this.top) {
        return null;
      }
      const poppedNode = this.top;
      this.top = this.top.next;
      poppedNode.next = null;
      this.size--;
      return poppedNode.value;
    }

    peek() {
      if (!this.top) {
        return null;
      }
      return this.top.value;
    }

    isEmpty() {
      return this.size === 0;
    }

    getSize() {
      return this.size;
    }

    print() {
      let current = this.top;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  ```

<aside>
💡 따라서 자바스크립트에서 스택을 구현할 때는, 데이터의 크기와 **추가/삭제의 빈도 등을 고려**하여 배열과 연결 리스트 중 적절한 것을 선택하면 된다. 일반적으로는 데이터의 크기가 작거나 추가/삭제의 빈도가 적은 경우에는 배열을, 그렇지 않은 경우에는 연결 리스트를 사용하는 것이 좋다.

</aside>

## 사용 예시

- 스택의 활용 예시 중 하나는 웹 브라우저의 '뒤로가기' 기능이다. 사용자가 링크를 클릭하거나 새로운 페이지로 이동하면, 이전 페이지의 정보를 스택에 저장한다. '뒤로가기' 버튼을 누르면, 스택에서 가장 최근에 저장된 페이지 정보를 꺼내온다.
- 다른 예시로, 함수 호출 시 함수 호출 정보를 스택에 저장하고, 함수 실행이 종료되면 스택에서 이전 함수 호출 정보를 꺼내올 수 있다.
