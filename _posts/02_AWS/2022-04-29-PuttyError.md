---
title: "[PuTTY] Error : No supported authentication methods available"
categories:
  - AWS 
tags:
  - PuTTY
  - EC2
toc: true
toc_sticky: true
toc_label: " "
toc_icon: "sticky-note"
---

PuTTY에서 Host Name에 EC2 인스턴스의 퍼블릭 IPv4 주소가 아닌, **퍼블릭 IPv4 DNS**를 넣어준다.  
그리고 왼쪽 탭에서 Connection > SSH > Auth > Private Key file for authentication에서 Browse를 클릭하여 key를 넣어준다.  
Open을 클릭하여 접속한다.