/*--------------------------------------------------------------------------------------------------*/

//default 파라미터

function 더하기(a, b = 10) {
  console.log(a + b);
}

더하기(1); // 파라미터 b가 안들어와도 10으로 기본값설정  로그는 11

function 더하기1(a = 1 + 2, b = 함수()) {}

// 연산식도 가능, 함수도

/*--------------------------------------------------------------------------------------------------*/

//함수의 Arguments  ==== 파라미터 전체

function 함수(a, b, c) {
  console.log(arguments); // arguments는 파라미터 전체를 감싸서 어레이화
}

function 함수(a, b, c) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

//But arguments는 옛날 문법이다. 만약 일부만 어레이화 시키고 싶거나 입력값의 length를 모를 때  ...Rest 를 쓰자.

/*--------------------------------------------------------------------------------------------------*/
//Rest 파라미터

function 함수2(...파라미터) {
  //받는 모든 입력값을 어레이화
  console.log(파라미터);
}

함수(1, 2, 3, 5, 34, 5, 34, 6, 346, 1);

function 함수2(a, b, ...파라미터) {
  //a,b를 제외하고 받는 모든 입력값을 어레이화
  console.log(파라미터);
}

// Arguments 보다 훨씬 유연함..But, 가장 뒤에 사용해야하고, 두번 이상 사용 금지.

/*--------------------------------------------------------------------------------------------------*/
//예제 1
function 예제1(...rest) {
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

//예제 4
function 예제3(a = 5, b = a * 2) {
  console.log(a + b);
}

예제4(undefined, undefined); ///undefined를 넣는다는 것은 파라미터 모두 default 값으로 쓰겠다는 뜻

//예제 5

function 어레이(...rest) {
  return [...rest];
}
var newArray = 어레이(1, 2, 3, 4, 5);
console.log(newArray);
//예제 6
console.log(Math.max(...nembers));

//예제 7

//Sort는 어레이에만 사용 가능해

function 예제7(...rest) {
  var 문자 = rest;
  문자.sort();
}

//예제 8

글자세기("aaacbbbbb");

function 글자세기(글자) {
  [...글자].forEach(function (a) {
    var 결과 = 0;
    if (결과[a] > 0) {
      결과[a] = 결과[a] + 1;
    } else {
      결과[a] = 1;
    }
  });
}

/// a>0 즉, 해당 배열에 값이 존재하면 +1( 이미 나온 알파벳 ) , a:0, 즉 값이 없으면 a:1 (아직 안나왔던 알파벳 새로 추가)
