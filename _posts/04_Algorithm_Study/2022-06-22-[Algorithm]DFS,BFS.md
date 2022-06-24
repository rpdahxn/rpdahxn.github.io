---
title: "[Algorithm] : DFS, BFS"
categories:
  - Algorithm
tags:
  - DFS
  - BFS
  - graph
toc: true
toc_sticky: true
toc_label: " "
toc_icon: "sticky-note"
use_math: true
comments: true
---

DFS와 BFS는 **그래프 탐색 알고리즘**이다.  

<br/>
# Graph  
그래프는 `Node`와 이 `Node`들을 서로 연결하는 `Edge`로 표현된다.  
그래프 탐색이란 하나의 노드를 시작으로 다수의 노드를 방문하는 것을 말한다.  

<br/>
그래프는 2가지 방식으로 구현할 수 있다.  

1. **인접 행렬(Adjacency Matrix)** : 2차원 배열로 그래프의 연결 관계를 표현하는 방식  
- 모든 노드들의 연결 관계를 저장한다.  
- 파이썬에서는 2차원 리스트로 구현한다.
  
2. **인접 리스트(Adjacency List)** : 리스트로 그래프의 연결 관계를 표현하는 방식
- 각 노드들의 연결된 관계만을 저장한다.
- 마찬가지로 파이썬에서는 2차원 리스트로 구현한다.

<br/>
# DFS
_Depth-First Search, 최대한 멀리 있는 노드를 우선으로 탐색한다._    

어떤 임의의 노드에서 시작해서 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방식  

<br/>
구현 방법     
1. **스택** 자료구조를 이용한다.  
     - 파이썬에서 스택은 기본 리스트로 구현한다.
     - append(), pop() 메서드를 이용한다.
     - ' 스택에 삽입하고 방문 처리를 한다. '  

2. **재귀함수**를 이용한다.  

<br/>
동작 과정
1. 탐색 시작 노드를 스택에 삽입하고 방문 처리를 한다.
2. 스택의 최상단 노드에 방문하지 않은 인접 노드가 있으면 그 인접 노드를 스택에 넣고 방문 처리를 한다. 방문하지 않은 인접 노드가 없다면 스택에서 최상단 노드를 꺼낸다.
3. 2의 과정을 더이상 수행할 수 없을 때까지 반복한다.  

<br/>
시간 복잡도  
_(정점의 개수: $V$, 간선 개수: $E$)_  
- 그래프를 인접 행렬로 구현했다면 $O(V^2)$  
- 그래프를 인접 리스트로 구현했다면 $O(V+E)$

<br/>
코드
```python
def dfs(graph, v, visited):
    visited[v] = True
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)
```

<br/>
# BFS
_Breadth-First Search, 가까운 노드부터 탐색한다._    

<br/>
구현 방법     
1. __큐__ 자료구조를 이용한다.  
   - 파이썬에서 collections의 deque 라이브러리를 사용하는 것이 좋다. 
   - ' 큐에 삽입하고 방문 처리를 한다. '  

<br/>
시간 복잡도  
- 그래프를 인접 행렬로 구현했다면 $O(V^2)$  
- 그래프를 인접 리스트로 구현했다면 $O(V+E)$

<br/>
코드  
```python
def bfs(graph, v, visited):
    queue = deque([v])
    visited[v] = True
    while queue:
        x = queue.popleft()
        for i in graph[x]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
```

<br/>
**DFS vs. BFS**  
DFS보다는 BFS가 조금 더 빠르게 동작한다.   
경로의 특징을 저장해야 하는 문제의 경우 DFS를 사용한다.  
최단거리 문제의 경우 BFS가 유리하다. BFS는 가까운 노드부터 탐색하기 때문에 가장 먼저 찾아지는 것이 곧 최단거리가 된다.  

<br/>
# Reference
- 나동빈, ⌜이것이 취업을 위한 코딩 테스트다 with 파이썬⌟


