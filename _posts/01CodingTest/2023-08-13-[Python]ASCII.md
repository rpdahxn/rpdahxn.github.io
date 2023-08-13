---
title: "Coding Test / Python / ASCII"
categories:
  - CodingTest
tags:
toc: true
toc_sticky: true
toc_label: " "
toc_icon: "sticky-note"
use_math: true
comments: true
---

# ASCII code
*(챗지피티한테 물어봤다)*         
아스키 코드는 컴퓨터와 통신 시스템에서 사용되는 문자 인코딩 방식이다.     
이 코드는 컴퓨터가 문자, 숫자, 기호 등을 이해하고 처리할 수 있도록 하기 위해 사용된다.    
아스키 코드는 7비트로 이루어진 코드 체계로서, 총 128개의 서로 다른 문자와 기호를 나타낼 수 있다. 이 중 0부터 31까지의 값은 제어 문자(control characters)로 사용되며, 32부터 127까지는 출력 가능한 문자들을 나타낸다. 예를 들어, 숫자 '0'은 48의 아스키 코드 값을 가지고 있고, 대문자 'A'는 65의 코드 값을 갖는다.           
<br/>

# chr()
✅ 숫자를 문자로 변환한다.      
```python
print(chr(65))
# A
print(chr(90))
# Z

print(chr(97))
# a
print(chr(122))
# z
```

# ord()
✅ 문자를 숫자로 변환한다.
```python
print(ord('A'))
# 65

print(ord('a'))
# 97
```
<br/>

# 활용
✅ 특정 알파벳에서 n번째 후의 알파벳을 간단하게 구할 수 있다.    
*(관련 코테 문제 : [PGS / 둘만의 암호](https://school.programmers.co.kr/learn/courses/30/lessons/155652) )* 
```python
print(chr(ord('A')+5))
# F
```