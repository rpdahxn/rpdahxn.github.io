---
title: "[AWS] SSH로 EC2 인스턴스 접근 & 웹 서비스 설치"
categories:
  - AWS 
tags:
  - EC2
  - SSH
toc: true
toc_sticky: true
toc_label: " "
toc_icon: "sticky-note"
---
## EC2 인스턴스 접근하기
```python
# 주의 ! 이때 키파일이 저장된 위치로 우선 이동해야한다.
# 키 파일에 대해서 소유자만 볼 수 있도록 권한을 변경한다.
$ chmod 400 (키 파일).pem

$ ssh -i (키 파일).pem ec2-user@(EC2 인스턴스의 퍼블릭IP)
```
<br/>

## EC2 인스턴스에 웹 서비스 설치하기

```python
# root 계정으로 전환
[ec2-user@ ~]# sudo su - 

# Web 서비스 설치
[ec2-user@ ~]# yum install httpd -y

# Web 서비스 실행
[ec2-user@ ~]# systemctl start httpd 

# 웹 페이지 구성
[ec2-user@ ~]# echo "<h1>Test Web Server :)</h1>"> /var/www/html/index.html

# curl 명령어로 웹 접속 확인
[ec2-user@ ~]# curl localhost
<h1>Test Web Server :)</h1>
```
<br/>
