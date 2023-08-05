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
이런 단점을 개선해주는 것들이 Momentum, AdaGrad, Adam 이다.
         
# Momentum optimization
SGD는 경사면을 따라 일정한 크기의 스텝으로 조금씩 내려가는 방식이며 이전 그레디언트는 고려하지 않는다.      
<br/>
반면 모멘텀 최적화에서는 **이전 그레디언트**가 중요한 요소가 된다.    

매 반복에서 현재 그레디언트를 **모멘텀 벡터** _momentum vector, m_ 에 더하고 이 값을 빼는 방식으로 가중치를 갱신한다. 즉, 이 모멘텀 벡터라는 것에 이전 그레디언트에 대한 정보가 담겨있다.    
$$
1. \,m \leftarrow \beta m - \eta\nabla _{\theta} J (\theta)  $$
$$
1. \,\theta \leftarrow \theta + m   $$
위 식에서 $\beta$는 모멘텀이 너무 커지는 것을 막아주는 하이퍼파라미터다.  

# AdaGrad
SGD는 당장의 가장 가파른 경사를 따라 내려가는 방식이었기 때문에 지그재그 형태를 보였다.    
반면 AdaGrad는 **가장 가파른 차원**을 따라 그레디언트 벡터의 스케일을 감소시키며 따라서 좀 더 효율적으로 움직인다.

$$
1. \,s \leftarrow s + \nabla _{\theta} J (\theta) \otimes \nabla _{\theta} J (\theta)
$$ 
그레디언트의 제곱을 벡터 $s$에 누적한다.    
$$
2. \,\theta \leftarrow \theta - \eta\nabla _{\theta} J (\theta) \oslash \sqrt{s + \varepsilon}
$$    
그레디언트 벡터를 $\sqrt{s+\varepsilon}$로 나누어 스케일을 조정한다. 이를 통해 매개변수의 원소 중에서 많이 움직인 원소는 학습률이 낮아진다.

**각각의** 매개변수에 적응적으로 _adaptive_ 학습률을 조정하면서 학습을 진행한다.      
# Adam
직관적으로는 모멘텀과 AdaGrad를 융합한 듯한 방법이다.   
<br/>

# Conclusion
항상 모든 문제에서 뛰어난 최적화 기법이랄 건 없다.     
풀어야 할 문제가 무엇이냐에 따라 가장 적절한 기법은 달라진다.   

## Reference
[밑바닥부터 시작하는 딥러닝 ](https://www.yes24.com/Product/Goods/34970929)
<br/>
[핸즈온 머신러닝](https://www.yes24.com/Product/Goods/89959711)
