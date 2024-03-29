---
title: "[밑시딥] 2장 퍼셉트론"
categories:
  - AI
toc: true
toc_sticky: true
toc_icon: "sticky-note"
use_math: true
comments: true
---
`DeepLearningFromScratch CHAPTER2 Perceptron`
<br/>

# 퍼셉트론
퍼셉트론은 신경망(딥러닝)의 기원이 되는 **알고리즘**이다.     
퍼셉트론은 입력 신호, 출력 신호, 가중치, 편향으로 이루어져있다.      
- **가중치***weight*     
입력 신호가 결과에 주는 영향력(중요도)를 조절하는 매개변수.    
- **편향***bias*    
뉴런이 얼마나 쉽게 활성화(책 현재 내용상 결과로 1을 출력하는 것)하느냐를 조절하는 매개변수.     
**뉴런: 원과 화살표로 이루어진 퍼셉트론 그림에서 원 부분*      

<br/>
이후에 나올 **신경망**에서 위와 같은 매개변수들의 적절한 값을 찾아나가는 것이 바로 **학습**     
<br/>

# 퍼셉트론의 한계
단층 퍼셉트론*single-layer perceptron*은 직선 하나로 나눈 영역만, 즉 **선형 영역**만 표현할 수 있다는 한계가 있다.     
<br/>

# 다층 퍼셉트론
퍼셉트론 여러 개를 '층을 쌓아' 만든 **다층 퍼셉트론** *multi-layer perceptron* 으로 이 한계를 극복할 수 있다.    
다층 퍼셉트론은 곡선의 영역과 같은 **비선형 영역**을 표현할 수 있다.    

다층 퍼셉트론은 굉장히 복잡한 표현을 할 수 있다.
<br/>

# Reference
📖 [밑바닥부터 시작하는 딥러닝 ](https://product.kyobobook.co.kr/detail/S000001057805)