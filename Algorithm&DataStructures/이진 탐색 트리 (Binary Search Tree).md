# 트리(Tree)

- `트리(Tree)`는 계층적인 구조를 나타내기 위한 추상 자료형으로, `노드(Node)`와 `간선(Edge)`으로 이루어진 자료구조이다.
- 구조는 그래프와 유사하지만, 트리는 **사이클(cycle)이 없는 비순환적인 구조**를 가지고 있다.
- 한 노드를 `루트(Root)`로 지정하고, 이 루트를 기준으로 다른 노드들이 상위 노드와 하위 노드로 구분된다. 즉, 모든 노드는 루트에서부터 어떤 경로를 따라 이어지며, 이 경로에 있는 노드들은 서로 **부모-자식 관계(Parent-Child Relationship)**를 가지게 된다.
- 일반적으로 `이진트리(Binary Tree)`와 `다진트리(Multiway Tree)`로 구분된다. 이진트리는 모든 노드가 최대 2개의 자식 노드를 가지는 구조를 의미하며, 다진트리는 최대 k개의 자식 노드를 가지는 구조를 의미한다.
- 데이터베이스, 운영체제, 알고리즘 등 다양한 분야에서 사용되며, 이를 이용하여 다양한 문제를 해결할 수 있다. 예를 들어, 파일 시스템에서 파일과 폴더의 관계를 나타낼 때, 그래프보다는 트리를 사용하는 것이 효율적이다. 또한, 이진트리를 이용하여 정렬된 데이터의 검색 속도를 개선하는 이진 검색 알고리즘을 구현할 수 있다.

## 이진 탐색 트리 (Binary Search Tree)

- 이진 트리의 일종으로, 다음의 두 가지 조건을 만족하는 트리이다.
  1. 각 노드는 하나의 키(key)를 가진다.
  2. 모든 왼쪽 서브트리의 키는 해당 노드의 키보다 작으며, 모든 오른쪽 서브트리의 키는 해당 노드의 키보다 크다.
- 즉, 특정 데이터를 검색할 때, `이진 탐색(Binary Search)` 알고리즘과 비슷한 방식으로 빠르게 검색할 수 있는 자료구조이다.
- 검색, 삽입, 삭제 등의 작업이 O(log n)의 시간 복잡도로 수행된다.
- 탐색 과정은 루트 노드부터 시작하여 해당하는 키 값을 찾을 때까지 왼쪽 서브트리 또는 오른쪽 서브트리로 이동하는 것이다.
- 키 값의 중복이 허용되지 않으며, 정렬된 상태를 유지하기 때문에 데이터의 검색에 효율적이다.
- 하지만 트리의 구조가 한쪽으로 치우칠 경우, 검색 작업의 시간 복잡도가 O(n)으로 늘어나게 된다. 이를 해결하기 위해 AVL 트리, 레드-블랙 트리 등과 같은 균형 이진 탐색 트리를 사용할 수 있다. 또한, 이진 탐색 트리에서 삭제 작업을 수행할 경우, 자식 노드의 개수에 따라 다양한 경우의 수가 발생하여 작업이 복잡해질 수 있다. 이를 보완하기 위해 삭제 알고리즘을 다양하게 구현하는 경우도 있다.

```jsx
// 이진 탐색 트리의 노드 클래스 정의
class Node {
  constructor(data) {
    this.data = data; // 노드에 저장할 데이터
    this.left = null; // 왼쪽 자식 노드
    this.right = null; // 오른쪽 자식 노드
  }
}

// 이진 탐색 트리 클래스 정의
class BinarySearchTree {
  constructor() {
    this.root = null; // 루트 노드
  }

  // 노드 삽입 메서드
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      // 트리가 비어있는 경우
      this.root = newNode;
    } else {
      // 트리가 비어있지 않은 경우
      this._insertNode(this.root, newNode);
    }
  }

  // 실제 노드 삽입 메서드
  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      // 새로운 노드가 현재 노드보다 작은 경우
      if (node.left === null) {
        // 왼쪽 자식 노드가 비어있는 경우
        node.left = newNode;
      } else {
        // 왼쪽 자식 노드가 비어있지 않은 경우
        this._insertNode(node.left, newNode);
      }
    } else {
      // 새로운 노드가 현재 노드보다 크거나 같은 경우
      if (node.right === null) {
        // 오른쪽 자식 노드가 비어있는 경우
        node.right = newNode;
      } else {
        // 오른쪽 자식 노드가 비어있지 않은 경우
        this._insertNode(node.right, newNode);
      }
    }
  }

  // 노드 삭제 메서드
  remove(data) {
    this.root = this._removeNode(this.root, data);
  }

  // 실제 노드 삭제 메서드
  _removeNode(node, key) {
    if (node === null) {
      // 트리가 비어있는 경우
      return null;
    } else if (key < node.data) {
      // 삭제할 노드가 현재 노드보다 작은 경우
      node.left = this._removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      // 삭제할 노드가 현재 노드보다 큰 경우
      node.right = this._removeNode(node.right, key);
      return node;
    } else {
      // 삭제할 노드를 찾은 경우
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }
      // 삭제할 노드의 자식 노드가 둘 다 있는 경우
      const tempNode = this._getMinNode(node.right);
      node.data = tempNode.data;
      node.right = this._removeNode(node.right, tempNode.data);
      return node;
    }
  }

  // 가장 작은 값을 가진 노드를 찾는 메서드
  _getMinNode(node) {
    if (node.left === null) {
      // 왼쪽 자식 노드가 없는 경우
      return node;
    } else {
      // 왼쪽 자식 노드가 있는 경우
      return this._getMinNode(node.left);
    }
  }

  // 트리 탐색 메서드
  search(data) {
    return this._searchNode(this.root, data);
  }

  // 실제 트리 탐색 메서드
  _searchNode(node, data) {
    if (node === null) {
      // 트리가 비어있는 경우 노드를 찾지 못한 것이므로 null을 반환
      return null;
    } else if (data < node.data) {
      // 찾을 데이터가 현재 노드의 데이터보다 작은 경우
      return this._searchNode(node.left, data);
    } else if (data > node.data) {
      // 찾을 데이터가 현재 노드의 데이터보다 큰 경우
      return this._searchNode(node.right, data);
    } else {
      // 찾을 데이터와 현재 노드의 데이터가 같은 경우
      return node;
    }
  }

  // 전위 순회 메서드
  preOrderTraversal() {
    this._preOrderTraversalNode(this.root);
  }

  // 실제 전위 순회 메서드
  _preOrderTraversalNode(node) {
    if (node !== null) {
      // 노드가 null이 아닌 경우
      console.log(node.data); // 현재 노드의 데이터를 출력
      this._preOrderTraversalNode(node.left); // 왼쪽 서브트리를 전위 순회
      this._preOrderTraversalNode(node.right); // 오른쪽 서브트리를 전위 순회
    }
  }

  // 중위 순회 메서드
  inOrderTraversal() {
    this._inOrderTraversalNode(this.root);
  }

  // 실제 중위 순회 메서드
  _inOrderTraversalNode(node) {
    if (node !== null) {
      // 노드가 null이 아닌 경우
      this._inOrderTraversalNode(node.left); // 왼쪽 서브트리를 중위 순회
      console.log(node.data); // 현재 노드의 데이터를 출력
      this._inOrderTraversalNode(node.right); // 오른쪽 서브트리를 중위 순회
    }
  }

  // 후위 순회 메서드
  postOrderTraversal() {
    this._postOrderTraversalNode(this.root);
  }

  // 실제 후위 순회 메서드
  _postOrderTraversalNode(node) {
    if (node !== null) {
      // 노드가 null이 아닌 경우
      this._postOrderTraversalNode(node.left); // 왼쪽 서브트리를 후위 순회
      this._postOrderTraversalNode(node.right); // 오른쪽 서브트리를 후위 순회
      console.log(node.data); // 현재 노드의 데이터를 출력
    }
  }
}
```
