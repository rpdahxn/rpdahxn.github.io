---
title: "Heap / Python"
categories:
  - Algorithm
tags: 
toc: true
toc_sticky: true
toc_label: " "
toc_icon: "sticky-note"
use_math: true
comments: true
---

# ✅ Heap
힙은 이진트리 기반의 자료구조로 힙을 통해 최댓값 / 최솟값을 빠르게 찾을 수 있다.   
파이썬에서 제공하는 `heapq` 모듈을 이용해 힙을 빠르게 구현할 수 있는데 이 모듈은 기본적으로 최소힙을 지원한다.    
최대힙을 사용하고 싶다면 원소를 음수로 변환해서 저장해 주면 된다.
<br/>

# 👀 관련 함수
```python
import heapq
```

`heapq.heapify(iterable)`     
주어진 리스트를 힙 구조로 변환한다.
<br/>

`heapq.heappush(heap, item)`      
힙에 원소를 추가한다.    
원소가 추가된 것을 반영하여 자동으로 해당 `heap[0]`에는 최솟값이 담겨 있다.  
<br/>

`heapq.heappop(heap)`     
힙에서 가장 작은 원소를 제거하고 반환하며 이를 반영하여 자동으로 해당 `heap[0]`에는 최솟값이 담겨 있다. 
<br/>

`heapq.heapreplace(heap, item)`     
힙에서 가장 작은 원소를 제거하고 새로운 원소를 추가한다.