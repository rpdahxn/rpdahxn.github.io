---
title: "[AWS] 퍼블릭 서브넷과 프라이빗 서브넷"
categories:
  - AWS 
tags:
  - VPC
toc: true
toc_sticky: true
toc_label: " "
toc_icon: "sticky-note"
---
## 서브넷 이란
쉽게 말하면 커다란 네트워크를 작게 나눈 네트워크다.  

## 퍼블릭 서브넷과 인터넷 게이트웨이
*퍼블릭 서브넷을 인터넷에 연결해 주는 인터넷 게이트웨이* 
   
**퍼블릭 서브넷**은 퍼블릭 IP를 가지며 외부 인터넷 구간과 직접적으로 통신할 수 있는 공공 네트워크다.  
**인터넷 게이트웨이**를 통해 외부 인터넷과의 통신이 가능하다.  
인터넷 게이트웨이는 양방향으로 연결을 지원한다. 따라서 퍼블릭 서브넷 -> 외부 인터넷, 외부 인터넷 -> 서브넷 으로의 통신이 모두 가능하다.  

## 프라이빗 서브넷과 NAT 게이트웨이
*프라이빗 서브넷을 인터넷에 연결해 주는 NAT 게이트웨이*  
  
**프라이빗 서브넷**은 프라이빗 IP를 가지며 외부 인터넷과 직접적인 통신을 할 수 없는 폐쇄적인 네트워크다.  
프라이빗 IP만 가지고 있어 자체적으로 외부 인터넷 구간의 사용자와 통신이 불가능하다.  
하지만 **NAT 게이트웨이**를 사용하면 프라이빗 서브넷도 외부 인터넷과 통신할 수 있다.  
프라이빗 IP는 인터넷 구간으로 넘어갈 수 없는데, NAT 게이트웨이가 프라이빗 IP를 퍼블릭 IP로 변환하여 통신을 돕는다.  
NAT 게이트웨이는 한쪽 방향으로만 동작한다. 즉, 프라이빗 서브넷 -> 외부 인터넷 통신만 가능하다. 외부 인터넷 -> 프라이빗 서브넷 통신은 불가능하다.


