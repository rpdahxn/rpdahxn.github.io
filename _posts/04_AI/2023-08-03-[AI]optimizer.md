---
title: "optimizer"
categories:
  - AI
toc: true
toc_sticky: true
toc_label: " "
toc_icon: "sticky-note"
use_math: true
comments: true
---
 
# 신경망 학습 이란
신경망에는 가중치와 편향이 있다.   
이 가중치와 편향을 손실 함수의 값을 최대한 낮추는 방향으로 조정하는 과정을 **학습** 이라고 한다.       
이때 최적의 매개변수 값을 찾는 것을 **최적화** _optimization_ 라 한다.     
      
# Stochastic Gradient Descent
최적의 매개변수 값을 찾기 위해 가중치나 편향에 대한 손실 함수의 미분값(기울기)을 이용할 수 있다.   
기울어진 방향으로 매개변수의 값을 조정하는 **최적화** 방법 _optimizer_ 이 **확률적 경사 하강법**_SGD_ 이다. 
<br/>
SGD는 무작정 기울어진 방향으로 진행하기 때문에 기울기가 자주 달라지는 함수에 대해서는 지그재그로 탐색하여 비효율적이다.    
이런 단점을 개선해주는 것들이 모멘텀, AdaGrad, Adam 이다.
         
# Momentum
# AdaGrad
**각각의** 매개변수에 적응적으로 _adaptive_ 학습률을 조정하면서 학습을 진행한다.     
# Adam
직관적으로는 모멘텀과 AdaGrad를 융합한 듯한 방법이다.
## Reference
[밑바닥부터 시작하는 딥러닝 ](https://www.yes24.com/Product/Goods/34970929)
