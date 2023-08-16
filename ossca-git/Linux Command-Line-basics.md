# Linux Command-Line-basics

유튜브 강의
<br/>
[OSSCA Git 강의 주소](https://www.youtube.com/playlist?list=PL8MaVgZDhGk-z7cezrPFJ5y6v3GW_S1iF) <br/>

참고한 자료 <br/>
[The Linux Command Line](https://wiki.lib.sun.ac.za/images/c/ca/TLCL-13.07.pdf)

# Navigation
Linux의 파일구조는 계층적 디렉토리구조이다. <br/>
이를 tree구조라고 부른다. <br/>
<br/>
tree 구조에서 가장 첫번째 디렉토리(파일)를 루트(Root)디렉토리라 부른다.
<br/>
하나의 디렉토리는 하위의 여러 디렉토리 및 폴더를 가진다.

```
My-app
|- node_modules/
|- public/
|- |- new_folder/
|- |- favicon.ico
|- |- index.html
|- |- robots.txt
|- src/
|- |- index.css
|- |- index.js
|- .gitignore
|- package.json
|- README.md

```

## pwd
**pwd: Print Working Directory** <br/><br/>
현재 작업 디렉토리를 프린트 해준다.

```bash
$ pwd
/d/WhatILearned
```

## ls
**ls: List** <br/>

현재 디렉토리를 포함해 디렉토리의 내용을 확인하고 다양한 중요 파일 및 디렉토리 속성을 확인할 수 있다.<br/>

- 뒤에 붙는 명령어는 2개 이상 동시에 사용이 가능하다.
  - ex ) ls -al
- ls -a : 모든 파일을 나열한다.
- ls -l : 세부사항들을 표시한다.
- ls -r : 역순으로 표시한다. (기본적으로 ls는 오름차순,가나다순,abc순)
- ls -s : 파일 크기별로 정렬한다.
- ls -t : 마지막 수정일 기준으로 정렬한다.(마지막 수정이 맨 앞)

<br/>

**ls -l 부가설명** <br/>
```bash
$ ls -l
total 1
drwxr-xr-x 1 zinu 197121  0 Aug 14 22:34 ossca-git/
-rw-r--r-- 1 zinu 197121 85 Aug 14 22:32 README.md
```
위의 내용은 본인이 ls 명령어를 쳐서 나온 결과물이다.<br/>
이 중 폴더 및 파일 앞에 붙은 내용들에 대해 알아보자. <br/>

- -rw-r--r-- : 파일에 대한 엑세스 권한을 나타낸다. 
  - 맨앞 - 는 파일을 의미한다.
  - 맨앞 d 는 디렉토리를 의미한다.
  - \- 뒤 세 문자( rw- 부분 ): 파일소유자의 접근권한
  - 그 뒤 세 문자 ( r-- 부분 ): 파일 그룹 구성원의 접근권한.
  - 그 뒤 세 문자 ( r-- 부분 ): 다른 모든 사용자의 접근권한.
  - 더 자세한 내용은 Permissions(권한) 부분에서 다룸.
- 1 : 파일의 하드링크 수 
- zinu : 파일 소유자의 이름
- 197121 : 파일을 소유한 그룹의 이름
- 85 : 파일크기(byte단위)
- Aug 14 22:32 : 파일의 마지막 수정 날짜 및 시간


## cd
**cd: Change Directory** <br/><br/>
Tip:경로를 입력하다가 Tab을 누르면 자동완성이 된다.

- cd : 홈 디렉토리로 이동
- cd - : 이전 디렉토리로 이동
- cd . : .이 의미하는것은 현재 작업 경로 
- cd .. : 현재 작업 경로에서 한 단계 상위경로로 이동
- cd /폴더이름 : 폴더이름의 경로로 이동
  - 폴더이름이 현재 경로의 하위 경로라면 바로 적어도 된다.
  - 폴더이름이 상위 경로에 있다면 절대 경로를 입력하면된다.

<br/>

# Exploring The System
파일 시스템 이동 방법을 익혔기 때문에 디렉토리의 세세한 내용들을 확인하는 명령어를 사용하여 파일을 읽어 보자. 

- ls (Navigation - ls와 내용 통합)
- file
- less
  
<br/>

## file
**file: Determine File Type** <br/><br/>

file 이라는 명령어를 통해 파일에 대한 간단한 설명을 확인할 수 있다.<br/>

```bash
$ file README.md
README.md: Unicode text, UTF-8 text, with CRLF line terminators

$ file ossca-git/
ossca-git/: directory
```
파일을 확인하면 파일의 종류와 파일의 인코딩 방식을 확인할 수 있다.<br/>
디렉토리를 입력하면 디렉토리라는 것을 알려준다.<br/>
<br/>

## less
**less: 파일 내용을 확인할 수 있다.** <br/><br/>
less는 텍스트 파일을 볼 수 있는 프로그램이다. <br/>
less는 'more'라고불리는 초기 유닉스 프로그램의 개선된 대체 프로그램으로 설계되었다. <br/>
페이지 방식으로 파일을 읽을 수 있어 긴 텍스트를 읽기에 효율적이다. <br/>
```bash
$ less README.md
해당 파일의 내용을 확인할 수 있다.

$ less ossca-git/
ossca-git/ is a directory
디렉토리는 디렉토리라고만 나온다.
```
**less Commeand**

- Page Up or b : 이전 페이지로 이동한다.
- Page Down or space bar : 다음 페이지로 이동한다.
- Up Arrow : 한줄 위로 이동한다.
- Down Arrow : 한줄 아래로 이동한다.
- G : 파일의 마지막으로 이동한다.
- 1G or g : 파일의 처음으로 이동한다.
- /검색어 : 검색을 할 수 있다.
- n : 다음 검색어로 이동한다.
- h : 도움말을 볼 수 있다.
- q : less를 종료한다.
