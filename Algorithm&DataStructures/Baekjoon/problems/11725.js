/**
 * https://www.acmicpc.net/problem/11725
 *
 * 문제
 * 루트 없는 트리가 주어진다. 이때, 트리의 루트를 1이라고 정했을 때, 각 노드의 부모를 구하는 프로그램을 작성하시오.
 *
 * 입력
 * 첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점이 주어진다.
 *
 * 출력
 * 첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.
 */

// const input = parseInt(require("fs").readFileSync("/dev/stdin").trim());
const [n, ...list] = require("fs")
  .readFileSync("./example.txt", "utf8")
  .trim()
  .split("\n");
const nodeInfo = list.map((value) => value.split(" "));

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, new Set());
  }

  addEdge(node1, node2) {
    this.nodes.get(node1).add(node2);
    this.nodes.get(node2).add(node1);
  }

  hasNode(node) {
    return this.nodes.has(node);
  }
}

const graph = new Graph();

nodeInfo.forEach((edge) => {
  const [node1, node2] = edge.map((value) => Number(value));
  if (!graph.hasNode(node1)) graph.addNode(node1);
  if (!graph.hasNode(node2)) graph.addNode(node2);
  graph.addEdge(node1, node2);
});

const result = [];
const queue = [1];
const visited = new Set();
visited.add(1);

while (queue.length > 0) {
  const node = queue.shift();

  graph.nodes.get(node).forEach((n) => {
    if (!visited.has(n)) {
      visited.add(n);
      queue.push(n);
      result[n - 2] = node;
    }
  });
}

console.log(result.join("\n"));
