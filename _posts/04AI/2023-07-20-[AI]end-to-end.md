---
title: "end-to-end 란"
categories:
  - AI
toc: true
toc_sticky: true
toc_label: " "
toc_icon: "sticky-note"
use_math: true
comments: true
---

## 💭

지난 [프로젝트](https://github.com/INISW/INISW6) 과정에서 정말 많은 논문을 읽었다.       
그때 정말 많이 나왔던 말이다.     
" end-to-end " !           
정확한 의미도 모르면서 그냥 넘어갔다.        
                     
밑바닥부터 시작하는 딥러닝1 을 읽고 있는데 마침 그 명확한 정의가 나와서 책을 읽다말고 갑자기 정리를 좀 해보려고 한다.          
 
# end-to-end 란
딥러닝을 end-to-end machine learning 이라고도 한다. 여기서 end-to-end란 **데이터(입력)에서 목표한 결과(출력)까지 사람의 개입 없이 얻는다**는 뜻을 담고 있다.      
      
# 기계학습과 신경망(딥러닝)
딥러닝은 end-to-end machine learning으로 사람의 개입이 없다.         
그럼 machine learning은 어떤가.       
<br/>
기계학습은 입력 데이터로부터 규칙을 찾아내는 역할을 **\*기계**가 담당한다. 하지만 (입력 데이터가 이미지라고 할 때) 이미지를 벡터로 변환할 때 사용할 적합한 특징은 **\*사람**이 설계한다.   
<br/>
정리를 하면, 기계학습에서는 사람이 설계한 특징을 사용해서 이미지를 벡터로 변환하고 이 변환된 벡터를 기계가 학습한다.    
딥러닝은 모든 과정이 기계가 스스로 학습해서 이루어진다.
