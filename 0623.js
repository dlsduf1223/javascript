// Template Literals,   Backtic(Back Quote), 신문법
var 문자 = `손흥민`;

// 백틱을 쓰는 이유 1. 엔터키 가능, 2. 중간에 변수 넣기 쉬움
var 변수 = `손흥민`;
var 문자 = `안녕 ${변수}`;
console.log(문자);

var 템플릿 = `<div>${변수}</div>`;

//문자열 + 함수도 가능한 back quote

var 문자 = `안녕 ${변수} 나는 누구`;
function 함수() {
  return 10;
}

/*--------------------------------------------------------------------------------------------------*/

함수`안녕 ${변수} 나는 누구`; // tagged literal은 문장 해체분석할때 주로 쓰인다.

function 해체분석기(문자들, 변수들) {
  console.log(문자들);
  console.log(변수들);
}
해체분석기`안녕 ${변수} 나는 누구`; //기댓값 : 안녕, 나는누구
//          ${변수}

//문장의 단어순서 변경 , 제거, 변수위치변경 등의 기능을 하는 함수

//(글자 순서 변경 기능)
function 해체분석기(문자들, 변수1, 변수2) {
  console.log(문자들[1], 문자들[0]);
} // 어절 단위로 배열에 들어감, 그 위치를 바꾼것

/*--------------------------------------------------------------------------------------------------*/

//예제

var pants = 20;
var socks = 100;

function 해체분석기1(문자, 변수1, 변수2) {
  console.log(문자[1] + 변수1 + 문자[0] + 변수2);
}

해체분석기1`바지 ${pants} 양말 ${socks}`; // 바지와 양말의 위치 변경

//예제 2

var pants = 0;
var socks = 324;

function 해체분석기2(문자, 변수1, 변수2) {
  if (변수1 == 0) {
    console.log(문자[0] + "안팔아요");
  }
}
해체분석기`바지 ${pants} 양말 ${socks}`; // 변수 pants가 0일때 '바지 안팔아요'라는 텍스트 출력

/*--------------------------------------------------------------------------------------------------*/
//Sprea Operator

var 어레이 = ["hello", "world"];
console.log(어레이); //기댓값 : 'hello', 'world'

console.log(...어레이); //기댓값 : hello world

// ... 대괄호, 중괄호를 제거하는 느낌

/*--------------------------------------------------------------------------------------------------*/
