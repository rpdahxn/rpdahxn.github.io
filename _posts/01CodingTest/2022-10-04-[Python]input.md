---
title: "[Python] input() vs. sys.stdin.readline()"
categories:
  - Coding Test 
# toc: true
# toc_sticky: true
# toc_label: " "
# toc_icon: "sticky-note"
comments: true
--- 
## 🔵input()
- parameter로 prompt message를 받을 수 있다.  
_-> prompt message란 예를 들어 입력을 받을 때 `"Input : "`과 같은 안내 문구를 가리킨다._    
- prompt message를 출력한 뒤, 사용자의 입력을 기다린다.
- 키보드로 입력값을 주면 데이터가 **하나씩, ( 키 입력 하나씩)** 버퍼에 들어간다. 개행문자(\n)를 받으면 입력이 종료된 것으로 간주한다.      
- 모든 입력값들을 문자열로 변환한뒤 리턴한다.
- 입력받은 값의 개행 문자를 삭제한 뒤 리턴한다.  
_-> (문자열로 변환 + 개행 문자 제거) 추가 작업들로 인해 그만큼 시간이 더 오래 걸린다._  

## 🔵sys.stdin.readline()
- parameter로 prompt message를 받지 않는다.  
- 키보드로 입력값을 주면 **한 번에** 읽어서 버퍼에 저장한다.  
*-> 하나씩 저장하는 input() 보다 속도가 더 빠르다.*
- 개행 문자를 포함해서 리턴한다. 따라서 개행 문자를 없애는 작업을 따로 해줘야 한다.
  - strip() 함수를 이용하면 된다.
    - strip() : 문자열 앞뒤의 공백 또는 특별한 문자 삭제   
    - rstrip() : 문자열 오른쪽(뒤)에 있는 공백 또는 특별한 문자 삭제
    - lstrip() : 문자열 왼쪽(앞)에 있는 공백 또는 특별한 문자 삭제


- 또한 입력 크기에 제한을 둬서 한 번에 읽어들일 문자의 수를 지정할 수 있다.
```python
input_ = sys.stdin.readline(2)
hihi
>>> input_
'hi'
```

<br/>
## 🧙🏾‍♂️
입력이 반복될수록 sys.stdin.readline()을 사용하는 것이 훨씬 속도가 빠르다.  
코테 문제를 풀 때는 속도가 중요하니 sys.stdin.readline()을 써야겠다 !
