## CSS 개요
#

#### 기본 문법

```css
선택자 {
  속성: 값;
}

--ex--

div {
  color: red;
}
```

#
#### 선언 방식

내장 방식 : `<style></style>`의 내용으로 스타일을 작설하는 방식  

인라인 방식 : `<div style="color: red; margin: 20px;"></div>` 요소의 style 속성에 직접 스타일을 작성하는 방식 

두 방식 모두 권장하지 않음 (유지보수가 힘들다)

링크 방식 : `<link rel="stylesheet" href="./css/main.cc">` (병렬 방식)

import 방식 : `@import url("./box.css");` CSS 문서 안에서 또 다른 CSS 문서를 가져와 연결하는 방식 (직렬 방식)

#
#### 선택자

기본 선택자

```css
전체 선택자, 모든 요소를 선택.
* { 

}

태그 선택자, 태그 이름이 ABC인 요소 선택.
li {
  color: red;
}

클래스 선택자, HTML class 속성의 값이 ABC인 요소 선택.
.orange {
  color: red;
}

아이디 선택자, HTML id 속성의 값이 ABC인 요소 선택.
#orange {
  color: red;
}
```

복합 선택자

```css
일치 선택자, 선택자 ABC와 XYZ를 동시에 만족하는 요소 선택.
span.orange {
  color: red;
}

자식 선택자, 선택자 ABC의 자식 요소 XYZ 선택.
ul > .orange {
  color: red;
}

하위 선택자, 선택자 ABC의 하위 요소 XYZ 선택. '띄어쓰기'가 선택자의 기호!
div .orange {
  color: red;
}

인접 형제 선택자, 선택자 ABC의 다음 형제 요소 XYZ 하나를 선택. (기억하기)
.orange + li {
  color: red;
}

일반 형제 선택자, 선택자 ABC의 다음 형제 요소 XYZ 모두를 선택
.orange ~ li {
  color: red;
}
```

가상 클래스 선택자

```css
HOVER, 선택자 ABC 요소에 마우스 커서가 올라가 있는 동안 선택.
a:hover {
  color: red;
}

ACTIVE, 선택자 ABC 요소에 마우스를 클릭하고 있는 동안 선택.
a:active {
  color: red;
}

FOCUS, 선택자 ABC 요소가 포커스되면 선택. (Focus가 될 수 있는 요소는 HTML 대화형 콘텐츠가 해당 ex INPUT, A, BUTTON, LABEL, SELECT 등
)
+ <div class="box" tabindex="-1"></div> tabindex를 넣으면 FOCUS가 될 수 있는 요소로 바뀜

input:focus {
  background-color: orange;
}

FIRST CHILD, 선택자 ABC가 형제 요소 중 첫째라면 선택.
.fruits span:first-child{
  color: red;
}

LAST CHILD, 선택자 ABC가 형제 요소 중 막내라면 선택.
.fruits span:last-child{
  color: red;
}

NTH CHILD, 선택자 ABC가 형제 요소 중 (n)째라면 선택.
.fruits *:nth-child(2) {
  color: red;
}

NOT, 선택자 XYZ가 아닌 ABC 요소 선택.
.fruits *:not(span) {
  color: red;  
}
```

가상 요소 선택자
```css
BEFORE, 선택자 ABC 요소의 내부 앞에 내용을 삽입. (인라인 요소)
.box::before {
  content: "앞!";
}

AFTER, 선택자 ABC 요소의 내부 뒤에 내용을 삽입.
.box::after {
  content: "뒤!";
}
```

속성 선택자

```css
ATTR, 속성 ABC을 포함한 요소 선택.
[disabled] {
  color: red;
}

[type] {
  color: red;
}

ATTR=VALUE, 속성 ABC을 포함하고 값이 XYZ인 요소 선택.
[type="password"] {
  color: red;
}
```





