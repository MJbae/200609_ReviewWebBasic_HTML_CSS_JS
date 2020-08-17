# 200609_ReviewWebBasic_HTML_CSS_JS
> 웹기본 학습을 위한 Toy-Projects
### [200809_BaseballGame 바로가기](#)
### [200803_GithubCloningProject 바로가기](#)
### [200720_TodoList 바로가기](#)
### [200620_PlayGames 바로가기](https://playgames.netlify.app/)




## 기간
* '20. 6. 20.(토) ~ 

## 개발환경
### 개발언어
* Vanilla JS, HTML, CSS
### 배포방법
* Netlify


---

# 🐵 선택자

## 1. 기본 선택자

- 전체 선택자, 태그 선택자
- 클래스 선택자, 아이디 선택자

## 2. 복합 선택자

- 일치 선택자, 자식 선택자
- 후손(하위) 선택자, 인접 형제 선택자
- 일반 형제 선택자

## 3. 가상 클래스 선택자(pseudo-class selector)

- hover: 마우스가 올라와 있는 동안 선택

      ex) a:hover {}

- active: 마우스가 클릭한 동안
- focus
- first child, last child
- nth-child(n), nth-of-type(n)
- 부정 선택자

## 4. 가상 요소 선택자:css에서 html 태그 생성하여 선택

가상클래스의 경우 : 한개 붙지만 본 선택자는 :: 두 개 붙는다

- url()을 content에 삽입할 수 있음
- before: 특정 요소 내부 앞에 내용 삽입

     before로 추가된 요소에 직접 스타일 입힐 수 있음

     Before 안에 content를 추가해야함 

     Ex) <ul><li>1</li>  

           ul li::before {

                content: "숫자";

                color: red;

            -숫자1  빨간색이 적용됨 출력됨

- after: 특정 요소 내부 내용 뒤에 내용 삽입

## 5. 속성 선택자

대괄호[] 사용, 특정 태그에 class나 id를 붙일 필요 없이 접근 가능

- attr: 특정 속성을 포함한 요소 선택

    ex) <input type="text" value"Manjin" disabled>일 때, [disabled] {}

- attr=value: 속성 attr을 포함하고 그 속성 값이 value인 요소 선택

    ex) [type="password"] {}

- attr^=value: 속성 attr을 포함하고 속성 값이 value로 시작하는 요소 선택

    ex) <button class="btn-success">

          <button class="btn-danger">일 때, [class^="btn-"] {} 앞의 선택자로 두 html 태그 선택 가능

- attr$=value 속성 attr을 포함하고 속성 값이 value로 끝나는 요소 선택

    ex) [class$="danger"] {} 

# 💀 단위

## 1. px: 고정값 / %: 부모요소 값에 상대적으로 적용되는 값

ex) 부모 요소의 width가 100px이고 자식 요소의 width가 50%이면 자식요소의 width는 50px

## 2. em: 자기 자신의 폰트 사이즈에 영향 받음 / rem: html에 지정된 fontsize에만 영향을 받음(em 상대적 연관성이라는 단점을 보완)

```css
// 예제에서 width는 600px과 같음
// 폰트 사이즈는 자동적으로 상속되므로 parent의 width는 300px과 같음
.container{
	font-size: 10px;
	width: 60em;		
}
.parent {
	width: 30em;
}
// 상속 받은 font-size가 10px이므로 2em으로 설정되면 결과적으로 20px이 됨
.child{
	font-size: 2em;
}
```

## 3. vw(viewport Width) / wh(viewport Height)

viewport: 현재 페이지에서 보이는 영역 

```css
.container {
// 현재 viewport의 width와 height의 50% 사용
	width: 50vw;
	height: 50vh;
	background: red;
} 
```

## 4. vmin(viewport min) / vmax(viewport max)

가로와 세로 길이 중 더 긴 부분에 적용됨

```css
.container {
// 가로 길이가 세로 길이보다 길다면 가로 길이의 50%를 width로 지정, 
// 반면 세로 길이가 더 길다면 세로 길이의 50%를 가로 길이로 지정
	width: 50vmax;
	height: 50vh;
	background: red;
} 
```

# 🙃 속성

## 1. width / height

블럭요소(div 등)의 width default는 브라우져 넓이, height은 0

인라인요소(span 등)의 width, height의 default는 모두 0

## 2. max-width / min-width / max-height / min-height

## 3. margin : 요소 외부 여백(단축)

- top, bottom, left, right 방향 여백을 동시 지정, 음수값 지정 가능
- % 사용 시, 부모요소의 'width'의 크기를 비교값으로 사용됨
- margin-top, margin-bottom, margin-left, margin-right 등의 개별 속성 사용 가능

## 4. 마진 중복(마진 병합, collapse)

- 마진의 특정 값들이 '중복'되어 협쳐지는 현상
- 두개 이상의 형제 요소들의 margin-top과 margin-bottom이 만났을 때(반면 left right 간 중복 X, 정상 적용)
- 부모 요소의 top과 자식요소의 top이 만났을 때 / 부모와 자식의 bottom이 만났을 때

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc652e95-85f9-49c6-ab2c-7ac6f41d1e3c/marginTop_.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc652e95-85f9-49c6-ab2c-7ac6f41d1e3c/marginTop_.png)

- 마진 중복 계산법

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bacb8c91-3c50-4c7f-991b-5231f270f745/.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bacb8c91-3c50-4c7f-991b-5231f270f745/.png)

- 마진 중복 회피 : 마진 대체 속성 이용(padding 이용 우회 등)

## 5. Padding: 요소 내부 여백 지정(단축)

기본적인 사용법은 마진과 유사(기본값, 개별속성 등)

내부 여백 증가에 따라 전체 크기 계산 시 주의

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f3bd385-7ff4-46c1-bdf9-00e2b32aba47/padding_.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f3bd385-7ff4-46c1-bdf9-00e2b32aba47/padding_.png)

box-sizing: border-box 사용 시 자동 계산

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a01a8b8b-f297-4373-85e4-432944708b47/border-box.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a01a8b8b-f297-4373-85e4-432944708b47/border-box.png)

## 6. border: 요소 테두리 선 지정(단축)

- border: 두께 종류 색상

    ex) border: 1px solid red;

- border-width(두께, 기본값 medium)(단축, 개별)

    4종류 입력 가능: medium, thin, thick, 단위(권장)

    border-width의 값 입력은 기본적인 사방위 default 방식을 따름

- border-style(종류, none)(단축, 개별)

    hidden(테이블에서), solid(실선), dotted(점선 . . .), dashed(파선 - - -)

    border-style의 값 입력은 기본적인 사방위 default 방식을 따름

    ex) border-style: solid dotted;

- border-color(색상, black)(단축, 개별)

    색상, transparent

## 7. box-sizing: 요소의 크기 계산 기준 지정

content-box: width, height만으로 요소의 크기 계산(padding, border 제외한 영역)

border-box: width, height에 padding, border 속성 포함하여 요소의 크기 계산

## 8. display: 요소의 박스 타입 설정

- block: 블럭 요소(div 등)
- inline: 인라인 요소(span 등)

inline이란 text 기반의 width, height, margin and padding's top and bottom X

- inline-block: 인라인-블럭 요소(input 등)

inline-block이란 기본적으로 inline 속성을 갖지만(text 기반의 수평적으로 쌓이는 특징 O) width inline이란 text 기반의 width, height, margin and padding's top and bottom O

- 기타: flex, table, 등
- none: 요소의 박스 타입이 없음(요소가 사라짐)

## 9. overflow: 요소의 크기 이상 자식요소가 넘칠 때, 내용을 제어(단축)

- visible: 넘친 부분을 자르지 않고 그대로 보여줌(default)
- hidden: 넘친 부분을 잘라내고, 보이지 않음
- scroll: 넘친부분을 잘라내고, 스크롤바를 이용하여 볼 수 있게 함
    - 자식요소가 넘치지 않더라도 스크롤바 생성
- auto: 넘친 부분이 있는 경우에만 스크롤바 생성하여 볼 수 있게 함
    - 자식요소가 넘치지 않는다면 스크롤바 생성 X
    - 주로 사용됨

## 10. opacity: 요소의 투명도를 지정

숫자: 0부터 1사이의 소수점 숫자 입력

display:none의 경우, 요소가 완전히 사라지고 다른 요소가 그 자리를 대체하지만 opacity:0의 경우, 요소가 보이지는 않지만 완전히 사라진 것은 아니기 때문에 다른 요소가 그 자리를 대체하지 못함

---

# 😃 글꼴, 문자

## 1. font: 글자 관련 속성 지정(단축)

- line-height 줄 높이 지정(Reset.css 적용 시 1)

    숫자 입력 시(단위 X) 글꼴 크기의 배수가 line-height의 값이 됨(1.4 ~ 1.7 권장)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f161fb26-8579-474b-880f-903ce9887cc8/line_height.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f161fb26-8579-474b-880f-903ce9887cc8/line_height.png)

- font-family 글꼴 지정

    font-family: [글꼴후보1, 글꼴후보2...], **글꼴계열**;

    ex) font-family: Arial, "돋움", dotum, sans-serif;

    글꼴 계열 필수입력

- font-weight 글자 두께 지정

    normal(400), bord(700), 숫자 단위 입력(100 ~ 900)

- font: 기울기 두께 크기 / 줄높이 글꼴;

    font: italic bold 20px / 1.5 "Arial", sans-serif;

    단축 속성 사용 시 font-size와 font-family를 필수 입력

    ex) font: 20px / 1.5 sans-serif;

## 2. color: 문자의 색상 지정

요소의 색상을 바꿀 땐 background-color 사용

- Hex 색상코드: 16진수 색상
- RGB: 빛의 삼원색 ex) rgb(255, 255, 255)
- RGBA(Red Green Blue Alpha channel): 빛의 삼원색, 투명도(주로 사용)

    ex) rgba(255, 0, 0, .5)

- HSL: 색상 채도 명도 ex) hsl(120, 100%, 50%)
- HSLA(Hue Saturation Lightness Alpha channel): 색상 채도 명도 투명도
- ex) hsla(120, 100%, 50%, .5)

## 3. text-align: **문자 정렬** 방식 지정

- left, right: 왼쪽 오른족 정렬
- center: 가운데 정렬
- justify: 양쪽 맞춤

2줄 이상 텍스트가 작성되었을 때 사용(br 사용 안한 상태에서)

## 4. text-decoration: 문자의 장식(line) 설정

- none, underline, overline
- line-through: 중앙선 지정

## 5. text-indent: (첫번째 줄) 들여쓰기 지정

음수값 입력으로 특정 문자를 화면에서 안보이게 만들 수 있음

ex) text-indent: -9999px;

관행 상 문자를 밀어버릴 때 -9999px 사용

## 6. Spacing

letter-spacing: 글자 사이 간격 설정

word-spacing: 띄어쓰기 간격 설정 

# 🤣 정렬, 위치

## 1. float: 요소를 좌우방향으로 띄움

본 개념은 주로 수평정렬 시 사용하나 최근 실무에서 해당기능을 flex로 대체하는 추세임 

none: X

left: 왼쪽으로 띄움

right: 오른쪽으로 띄움

## 2. clear: 특정 부분부터 float 속성 적용을 해제함

실무에서 주로 'clear: both;' 사용 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6515434b-9b95-4550-ac5e-fa723ae8228d/float_.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6515434b-9b95-4550-ac5e-fa723ae8228d/float_.png)

- clear 사용에 따른 float 문제 해결

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6bac3024-5d55-4a61-80d1-e8d8fbbb4d4f/float-clear.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6bac3024-5d55-4a61-80d1-e8d8fbbb4d4f/float-clear.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ac293936-9e3f-4cc5-8ab9-4a073550f5dc/clear_1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ac293936-9e3f-4cc5-8ab9-4a073550f5dc/clear_1.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8007cc6-e902-4cec-a1ba-70f0d687108a/clear_2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8007cc6-e902-4cec-a1ba-70f0d687108a/clear_2.png)

## 3. 수평정렬

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4c43335b-6e5f-482d-8795-a1bc92e1caf5/flaot-.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4c43335b-6e5f-482d-8795-a1bc92e1caf5/flaot-.png)

- float: left / 좌측에서부터 쌓는 개념
- float: right / 우측에서부터 쌓는 개념

## 4. flaot 해제

float 속성이 적용된 요소 주위로 다른 요소의 적용을 방지

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e2e42de8-0610-4440-a803-0955f5967013/flaot_.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e2e42de8-0610-4440-a803-0955f5967013/flaot_.png)

1번의 문제점 : 다음 형제 요소를 불필요하게 추가하여 clear 사용

2번의 문제점: overflow는 clear와 관계 없는 속성으로 clear와 관계가 없으므로 이 방법은 일종의 편법

3번 추천: 불필요하게 다른 요소 추가할 필요 없으며 clear 문법의 정공법

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a961e24-347d-4367-9440-5672a0b52a18/clearfix.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a961e24-347d-4367-9440-5672a0b52a18/clearfix.png)

clearfix로 wrraping한 영역에는 float이 적용된 요소만 배치하고 해제한 요소는 그 밖에 배치함

## 5. display 수정

float 속성이 추가된 요소는 display 속성이 대부분 block으로 수정됨

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0bf76c6-553b-4625-9e68-977c209cdd9b/float-block.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0bf76c6-553b-4625-9e68-977c209cdd9b/float-block.png)

→ display: flex(or inline-flex) 사용 시 inline 속성의 요소에 float 사용해도 block 속성 부여 X

## 6. position: 요소의 위치 지정 장법의 기준 설정

- static: 기준 없음
- (pirmary!) relative: 요소 자신을 기준으로 배치 / absolute: 부모 요소를 기준으로 배치

    → postion: absolute 상태에서 top, left, right, bottom(단위, %)으로 **위치상 부모요소** 내에서의 배치 가능

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aed07ee7-fff9-4aaa-8edb-c0d4a448a9f8/position.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aed07ee7-fff9-4aaa-8edb-c0d4a448a9f8/position.png)

- relative의 경우 position: relative 사용 전 위치에서 삽입되는 속성 만큼 이동

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cecb1176-a522-4aae-b3ad-e38de4a409ae/relative.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cecb1176-a522-4aae-b3ad-e38de4a409ae/relative.png)

→ relative 배치의 경우, 주변 요소의 영향을 받아 배치가 바뀌므로 권장 X(absolute 권장)

ex) 박스 1이 제거될 경우, 박스 2의 위치는 박스 1이 사라진 곳을 높이로 올라감

- absolute의 경우 **위치상 부모요소(position: relative 속성 부여된 요소)**를 기준으로 배치되나, 만약 position 요소가 없다면 viewport를 부모요소로 설정
- fixed: viewport를 기준으로 배치함

    → 배너 광고, 헤더 등에 사용됨

- sticky: 스크롤 영역 기준으로 배치(IE 지원 X)
- 요소 쌓임 순서(Stack order):

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/284c36ac-63a0-42f6-9762-83ba26f96421/stackOrder.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/284c36ac-63a0-42f6-9762-83ba26f96421/stackOrder.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ca97ecc-e3b9-40f9-a2db-2557b434b473/g-index.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ca97ecc-e3b9-40f9-a2db-2557b434b473/g-index.png)

- display 수정: absolute, fixed 속성 적용된 요소는 대부분 blcok 속성 자동 보유

    → flex, inline-flex 속성 보유 시 bock 속성 보유 X

# 😘 배경

## 1. 기본 사용법

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9955cf66-3cc5-475c-9a99-326947657e04/_.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9955cf66-3cc5-475c-9a99-326947657e04/_.png)

## 2. background-attachment

요소가 스크롤될 때, 배경 이미지의 스크롤 여부(특성) 설정

- scroll: 배경 이미지가 요소를 따라서 같이 스크롤됨
- 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad63126f-1aaf-4444-a325-a6bd30e4e3f1/scroll.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad63126f-1aaf-4444-a325-a6bd30e4e3f1/scroll.png)

- fixed: 배경 이미지가 Viewport에 고정, 요소와 같이 스크롤 X

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e26ad499-cf62-46b7-aef5-9c7b1b872ee0/fixed.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e26ad499-cf62-46b7-aef5-9c7b1b872ee0/fixed.png)

- local: 요소 내 스크롤 시 배경 이미지가 같이 스크롤

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e7d46c54-fc7c-4769-ba4b-ad12888b60f5/local.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e7d46c54-fc7c-4769-ba4b-ad12888b60f5/local.png)

## 3. background-size

- cover: 배경 이미지 크기 비율 유지, 더 넓은 너비에 맞춤(이미지 잘릴 수 있음)
- contain: 배경 이미지 크기 비율 유지, 더 짧은 넙에 맞춤(이미지 잘리지 않음)

---

# 🦍부트스트랩

## 레이아웃

- 화면의 한줄은 12개의 그리드 열로 이뤄짐
- 그리드 열은 12개의 가능한 열들을 원하는 만큼 명시하는 것으로 만들어지며, 같은 크기의 3개 열은 `.col-xs-4` 를 3개 사용할 수 있음
- 만약 한 행에 12열보다 더 많이 배치된다면, 남은 열들은, 하나의 유닛으로, 새로운 라인에 감쌈
- SM: samll device(tablets), MD: medium devices(desktops),  lg: large devices(large desktops)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f13465c4-9eff-4cf9-aef9-75288ca98ef2/_.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f13465c4-9eff-4cf9-aef9-75288ca98ef2/_.png)

---

# flex

---

# Grid

# 🙊 우선순위

명시도, 선언순서, 중요도에 따라 우선순위 결정

1. 명시도 점수가 높은 선언이 우선(명시도)
    1. !important: 최고점
    2. 인라인 선언 방식(HTML styly 속성 사용): 1000점 / <div style="color: orange;">
        - 인라인 선언 방식의 경우 유지보수에 어려움이 있으므로 권장 X
    3. 아이디 선택자: 100점 / #color yellow { color: yellow }
    4. 클래스 선택자: 10점 / .{}
    5. 태그 선택자: 1점 / span {}
    6. 전체 선택자: 0점 / * {}
    7. 상속: 점수 X
2. 1번이 같을 경우 가장 마지막에 작성된 것 우선(선언순서)
3. 명시도가 '상속' 규칙보다 우선, !important가 적용된 선언 방식이 다른 모든 방식보다 우선(중요도)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e3e4bcc9-b904-46a8-93fb-35d921f5433b/.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e3e4bcc9-b904-46a8-93fb-35d921f5433b/.png)

# 기타

1. 브라우저별 초기 스타일 설정값 제거
    - <link rel="stylesheet" href="[https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css](https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css)">

# 상속

css 특정 속성의 경우 상위 요소에 적용된 것이 하위 요소에도 적용되는 것을 상속이라 함

- 상속되는 속성의 경우 대부분 글자(text)와 연관된 것
- 강제상속: inherit 이라는 속성을 사용하여 하위 요소에 특정 요소의 속성을 상속할 수 있음

    ex) .parent { position: absolute; } .child { position: inherit } // position 요소를 상속 받음

---
