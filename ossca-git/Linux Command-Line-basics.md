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
pwd: Print Working Directory <br/>
현재 작업 디렉토리를 프린트 해준다.

## ls
ls: List <br/>
현재 작업 디렉토리에 있는 파일과 폴더들을 보여준다. <br/>
ls라는 명령어 뒤에 옵션을 붙이면 파일 상세 내용 등을 보여준다. <br/>
- 뒤에 붙는 명령어는 2개 이상 동시에 사용이 가능하다.
  - ex ) ls -al
- ls -a : 모든 파일을 나열한다.
- ls -l : 세부사항들을 표시한다.
- ls -r : 역순으로 표시한다. (기본적으로 ls는 오름차순,가나다순,abc순)
- ls -s : 파일 크기별로 정렬한다.
- ls -t : 마지막 수정일 기준으로 정렬한다.(마지막 수정이 맨 앞)

## cd
cd: Change Directory <br/>
경로를 입력하다가 Tab을 누르면 자동완성이 된다.

- cd = 홈 디렉토리로 이동
- cd - 이전 디렉토리로 이동
- cd . = .이 의미하는것은 현재 작업 경로 
- cd .. : 현재 작업 경로에서 한 단계 상위경로로 이동
- cd /폴더이름 : 폴더이름의 경로로 이동
  - 폴더이름이 현재 경로의 하위 경로라면 바로 적어도 된다.
  - 폴더이름이 상위 경로에 있다면 절대 경로를 입력하면된다.

<br/>

# Exploring The System
파일 시스템 이동 방법을 익혔기 때문에 디렉토리의 세세한 내용들을 확인하는 명령어를 사용하여 파일을 읽어 보자. 