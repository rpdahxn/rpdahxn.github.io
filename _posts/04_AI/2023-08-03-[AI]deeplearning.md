---
title: "신경망 학습 이란"
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
이 가중치와 편향을 손실 함수의 값을 최대한 낮추는 방향으로 조정하는 과정을 '학습' 이라고 한다.
      
# Optimizer - Stochastic Gradient Descent
이때 **최적의** 매개변수 값을 찾기 위해 가중치나 편향에 대한 손실 함수의 미분값(기울기)을 이용해 기울어진 방향으로 매개변수의 값을 조정하는 **최적화**_optimizer_ 방법이 **확률적 경사 하강법**_SGD_ 이다. 
         
## Reference
[밑바닥부터 시작하는 딥러닝 ](https://www.yes24.com/Product/Goods/34970929)
