---
title: "[밑시딥] 6장 학습 관련 기술들 ① 최적화"
categories:
  - AI
toc: true
toc_sticky: true
toc_icon: "sticky-note"
use_math: true
comments: true
---
`DeepLearningFromScratch CHAPTER6 Learning Skills`
<br/>

신경망에는 가중치와 편향이 있다.   
이 가중치와 편향을 손실 함수의 값을 최대한 낮추는 방향으로 조정하는 과정을 **학습** 이라고 한다.       
이때 최적의 매개변수 값을 찾는 것을 **최적화** _optimization_ 라 한다.     
<br/>
이전까지는 가중치나 편향에 대한 손실 함수의 미분값(기울기)을 이용해서 최적값을 찾아나갔다.     
이렇게 기울어진 방향으로 매개변수의 값을 갱신하는 최적화 방법이 **확률적 경사 하강법**_SGD_ 이다. 
<br/>

# Stochastic Gradient Descent
$$W \leftarrow W - \eta\frac{\partial L}{\partial W}$$       
(*$$W$$: 갱신할 가중치 매개변수, $$L$$: 손실 함수, $$\eta$$: 학습률*)        
<br/>
SGD는 당장의 기울어진 방향으로 진행하는데 그 방향이 최솟값과 다른 방향을 가리킨다면 지그재그의 형태로 탐색을 하게 된다.   
따라서 기울기가 자주 달라지는 함수에 대해서는 비효율적이다.    
이런 단점을 개선해주는 다른 기법들로 Momentum, AdaGrad, Adam이 있다.
         
# Momentum optimization
$$v \leftarrow \alpha v - \eta\frac{\partial L}{\partial W}$$       
$$W \leftarrow W + v$$       
(*$$\alpha$$: 모멘텀, $$v$$: 속도*)
<br/>

우선 모멘텀은 '운동량'을 뜻하며 SGD 방식에 모멘텀 개념을 도입한 게 Momentum optimization이다.       
기울기 방향으로 힘을 받아 물체가 가속되어 공이 그릇의 바닥을 구르듯 움직인다. 따라서 모멘텀의 갱신 경로는 SGD보다 '지그재그 정도'가 덜하다.      
<br/>

# AdaGrad
학습을 진행하면서 학습률을 점차 줄여가는 방법을 **학습률 감소**_weight decay_ 라고 한다.    
이를 발전시킨 게 AdaGrad로, **개별 매개변수에 적응적으로(_adaptive_) 학습률을 조정**하면서  학습을 진행한다.      
<br/>
$$h \leftarrow h + \frac{\partial L}{\partial W} \bigodot \frac{\partial L}{\partial W}$$       
$$W \leftarrow W - \eta \frac{1}{\sqrt{h}}\frac{\partial L}{\partial W}$$       
<br/>
$$h$$ 변수에 기울기의 제곱값들이 계속해서 더해진다. 그리고 가중치 값을 갱신할 때 $$\frac{1}{\sqrt{h}}$$ 을 곱하는데 이를 통해 매개변수의 원소 중에서 값이 크게 갱신된 원소는 학습률이 낮아지게 된다.*(분모 $$h$$ 값이 크니까)*     
이런식으로 학습률 조정이 이루어지며 학습률 감소가 매개변수마다 다르게 적용된다. 
<br/>

# Adam
Adam = 모멘텀*(: 공이 그릇 바닥을 구르는 듯한 움직임)* + AdaGrad*(: 각 매개변수마다 적응적으로 갱신 정도를 조정)*        
<br/>
Adam의 갱신 경로도 모멘텀과 비슷하게 공이 구르는 듯 하지만 학습의 갱신 정도를 적응적으로 조정하기 때문에 모멘텀 보다 공의 좌우 흔들림이 적다.
<br/>

## Reference
[밑바닥부터 시작하는 딥러닝 ](https://www.yes24.com/Product/Goods/34970929)