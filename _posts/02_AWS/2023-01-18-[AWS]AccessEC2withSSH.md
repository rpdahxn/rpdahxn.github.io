---
title: "[AWS] SSH로 EC2 인스턴스 접속 & 웹 서비스 설치"
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
```python
# 주의 ! 이때 키파일이 저장된 위치로 우선 이동해야한다.
# 키 파일에 대해서 소유자만 볼 수 있도록 권한을 변경한다.
$ chmod 400 (키 파일).pem
```
<br/>

## 퍼블릭 EC2 인스턴스 접속
```python
$ ssh -i (키 파일).pem ec2-user@(EC2 인스턴스의 퍼블릭IP)
```
<br/>

## 프라이빗 EC2 인스턴스 접속
프라이빗 서브넷에 속하는 프라이빗 EC2 인스턴스는 앞서 퍼블릭 서브넷에 접속했던 것처럼 외부 네트워크에서 접속할 수 없다.  
따라서 우선 퍼블릭 EC2 인스턴스에 최초 접속을 하고 로컬 통신을 통해 프라이빗 EC2 인스턴스에 접속해야 한다. 
```python
# 우선 퍼블릭 ec2 인스턴스에 접속한다.
$ ssh -i (키 파일).pem ec2-user@(EC2 인스턴스의 퍼블릭 IP)
# 프라이빗 ec2 인스턴스에 접속한다.
$ ssh root@(EC2 인스턴스의 프라이빗 IP)
```
<br/>

## EC2 인스턴스에 웹 서비스 설치하기

```python
# root 계정으로 전환
[ec2-user@ ~]$ sudo su - 

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

## EC2 접속 해제
```python
exit
```
<br/>
