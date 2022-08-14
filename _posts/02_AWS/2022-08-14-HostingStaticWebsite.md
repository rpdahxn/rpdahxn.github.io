---
title: "[AWS project] : 01 정적 웹 사이트 호스팅하기"
categories:
  - AWS
tags:
  - S3
toc: true
toc_sticky: true
toc_label: " "
toc_icon: "sticky-note"
use_math: true
comments: true
---

사실 어떤 내용을 담은 사이트를 만들지는 정하지 못했다..  
그래서 일단 사이트를 구축하면서 생각해 보려고 한다.!  

AWS Bootcamp 강의에서 배운 내용을 바탕으로 S3를 이용해서 정적 웹 사이트를 호스팅 해보려고 한다.  

AWS Cloud Practitioner 자격증을 공부할 때까지만 해도 S3는 데이터를 저장하는 용도로만 쓰이는 줄 알았다.  
그런데 S3로 웹 사이트를 호스팅 할 수도 있다!.  

<br/>
# 01 Amazon S3에서 bucket 생성하기  
AWS Management Console의 S3에서 버킷을 생성한다.  

- __일반 구성__ 에서 버킷 이름을 작성하고, AWS 리전을 선택한다.
- __객체 소유권__ 에서 `ACL 활성화`, `버킷 소유자 선호`를 선택한다.   
  _이 두 설정에 대한 이유는 사실 잘 모르겠다. 강의 내용을 따라했다.._
- `모든 퍼블릭 액세스 차단`을 해제해 준다.
- 나머지 설정들은 우선 건들지 않고 그대로 뒀다.  
- 버킷 만들기 클릭 !    
<br/>
<img src="/assets/images/bucketCreated.png">  

생성된 버킷을 클릭하고 `속성` 탭에서 가장 마지막 설정인, `정적 웹 사이트 호스팅` 에서 `편집`으로 들어간다.  
- `정적 웹 사이트 호스팅` 을 활성화 한다.
- `인덱스 문서`, `오류 문서`는 각각 index.html, error.html을 넣어준다.
- 여기까지 완료하면 **Bucket website endpoint**가 생성된다. 
- 하지만 해당 링크로 접속을 해도 아직까지는 403 에러가 뜬다.  
<br/>
<img src="/assets/images/403error.png">  
- 왜냐하면 아직 bucket permission에 대한 설정을 안 해줬기 때문이다.  

<br/>
# 02 bucket에 컨텐츠 업로드하기  
정적 웹 사이트에 띄울 파일을 업로드 해준다.  

그런데 나는 프론트에 대해서는 정말 아는 게 아직 없기 때문에 우선 아주 간단한 .. 글자 몇 개만 띄워볼 거다.  

버킷을 다시 클릭하고 `객체` 탭에서 간단한 index.html 파일을 업로드해 준다.  
<br/>
<img src="/assets/images/indexUploaded.png">  

<br/>
# 03 객체에 대한 액세스 활성화하기  
✨Amazon S3에 저장되는 객체들은 기본적으로 비공개로 설정된다.  
    _이를 통해 데이터를 안전하게 유지할 수 있다._  

하지만 나는 공개적으로 접속이 가능한 사이트를 만드는 것이기 때문에 비공개 설정을 바꿔줘야 한다.  

<br/>
- 이전의 `객체` 탭에서 업로드한 index.html 파일을 체크하고 `작업`에서 `ACL을 사용하여 퍼블릭으로 설정` 으로 들어간다.  
- `퍼블릭으로 설정` 을 해준다.  
- 이전에 복사해둔 bucket website endpoint로 다시 접속하면  
<br/>
<img src="/assets/images/testPage.png">  
- 내가 작성한 index.html 파일이 잘 나타난다.!
- index.html 파일을 수정했다면 수정된 파일에 대해 앞서 한 과정을 그대로 반복해서 다시 `파일 업로드 -> ACL을 사용하여 퍼블릭으로 설정` 을 다시 해주면 된다.  