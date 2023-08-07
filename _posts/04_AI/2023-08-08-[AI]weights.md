---
title: "Weights"
categories:
  - AI
toc: true
toc_sticky: true
toc_icon: "sticky-note"
use_math: true
comments: true
---
 
# 가중치의 초깃값
가중치 초깃값을 어떻게 설정하느냐가 신경망 학습을 좌우할 수 있을 만큼 중요하다.    

각 층의 **활성화 값**들은 적당히 **고르게 분포**되어야 한다. 각 층 사이에 적당히 다양한 데이터가 흐르게 해야 신경망 학습이 효율적으로 이뤄진다.    
만약 이때 치우친 데이터가 흐르면 기울기 소실이나 표현력 제한 문제에 빠져서 학습이 잘 이루어지지 않게 된다.
      
# Xavier Initialization
가중치를 표준편차가 $\frac{1}{\sqrt{n}}$ _(n은 앞 층의 노드 수)_ 인 정규분포로 초기화하는 방법이다.   
활성화 함수로 sigmoid나 tanh 등을 사용할 때 사용한다.  
         
# He Initialization
ReLU에 특화된 초깃값 설정 방법이다.    
표준편차가 $\sqrt{\frac{2}{n}}$인 정규분포를 사용하는 방법이다.

## Reference
[밑바닥부터 시작하는 딥러닝 ](https://www.yes24.com/Product/Goods/34970929)
