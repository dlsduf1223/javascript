// Destructuring

var arr = [2, 3, 4];

var a = arr[0];
var b = arr[1];

//이렇게 변수에 값을 따로 넣어줄 수도 있고

var [a, b, c] = [2, 3, 4]; //이렇게도 가능. Destructuring

var [a = 2, b = 3, c = 4] = []; //default 값 설정도 가능..

//기본값을 설정 안하면 undefined

var obj = { name: "kim", age: 30 };
var name = obj.name;
var age = obj.age; //마찬가지로 오브젝트도 이렇게 따로따로 변수에 값을 넣어줘도 되지만..

var { name, age } = { name: "kim", age: 30 };

//변수명을 키값과 똑같이 해야함.....

/*--------------------------------------------------------------------------------------------------*/

//이와 반대의 경우... 변수를 Object에 넣고 싶다.

var name = "kim";
var age = 30;

var obj = { name: name, age: age }; //변수를 밸류값에 넣음..
var obj = { name, age }; // 키값과 밸류값이 같을 때

////파라미터에도 똑같이 적용

var obj = { name: "kim", age: 30 };
function 함수({ name, age }) {
  console.log(name);
  console.log(age);
}

함수({ name: "kim", age: 30 });

//좌우변을 대칭되게 만들면 된다.

/*--------------------------------------------------------------------------------------------------*/

// Import/Export

<script type="module">
  import a from '/library.js';
  {/* 불러올 경로(library.js)의 a변수를 꺼내겠다 */}
  console.log(a);
</script>;

import 가져올거 from "경로";

// export default는 딱한번만 쓸 수 있다.
// 여러개 하려면
export { a, b };
export var a = 10; //변수를 만들면서 export해줌
export default c; // 위의 것과 동시에 사용 가능하다.

import c, { a, b } from "library.js"; // 이렇게 써야함..

import { a as 별명 } from "library.js"; // a의 변수명을 변경하여 쓰기 위함..

//default를 제외한 모든 변수를 한번에 import하고 싶다면?
import * as 작명 from "library.js";
console.log(작명.a);
console.log(작명.c); //c는 export default라 불가능 import에 따로 더 추가해줘야함...

<script src="library.js"></script>; // 위와 같은 코드지만 호환성이 좋긴하다.

/*--------------------------------------------------------------------------------------------------*/
// 비동기 함수들을 순차적으로(동기적)으로 실행하려면??

// 콜백함수를 써보자. 파라미터 자리에 콜백함수를 넣는것임..
function 첫째함수() {
  console.log(1);
}

function 둘째함수() {
  console.log(2);
}

첫쨰함수();
둘째함수(); //이러면 순서대로 실행이 되지 않을수도 있음. because of stack, queue 개념때문에

function 첫째함수(둘째함수) {
  console.log(1);
  둘째함수();
}

function 둘째함수() {
  console.log(2);
}

첫째함수(둘째함수); //이러면 무조건 순차적으로 실행 됨
// 이러한 콜백함수의 문제점
// - 코드가 복잡해진다

첫째함수(){
  둘째함수(){
    셋째함수(){

    }
  }
}

//그래서 쓰는 것이 Promise
//위에 Promise 오브젝트를 미리 설계해두고나서

첫째함수().then(function(){

}).then(function(){          //then 은 Promise에서 성공이 출력될 경우, catch는 실패가 출력될 경우

}).catch(function(){

})

//Promise 오브젝트를 설계하는 방법

var 프로미스 = new Promise(function(resolve,reject){
  var 연산 = 1+1;
  resolve(연산);
});    //Promise는 성공/실패 판정하는 기계...성공(), 실패()를 다 설계해줘야댐.

프로미스.then(function(결과){           ///위의 '연산'의 값이 아래 '결과'로 넘어오게 됩니다.
  console.log('성공입니다.'+결과)
}).catch(function(){
  console.log('실패입니다.');
})

/*--------------------------------------------------------------------------------------------------*/

//이미지 로딩 체크 (로딩이 잘되었는지 안되었는지)

var 이미지로딩 = new Promise(function(resolve,reject){
  var img = document.querySelector('#test');
  img.addEventListener('load',function(){
    성공();
  })
  img.addEventListener('error',function(){
    실패();
  })

  이미지로딩.then(function(){
    console.log('로딩 성공');
  }).catch(function(){
    console.log('로딩 실패');
  })
})

/*--------------------------------------------------------------------------------------------------*/


//get요청이란?  서버(서버주소)에서 자료 좀 갖다주세요~

$.get('서버주소').done(function(결과){
  console.log(결과)
})

/*--------------------------------------------------------------------------------------------------*/
//프로미스를 체인시키는 방법(연쇄적으로 사용)

프로미스.then(function(결과){
  console.log(결과)
  return new Promise((성공,실패)=>{    //then이 실행된 자리에 Promise를 또 남기겠다.

  }).then(function(){

  })
})

//URL을 파라미터로 하는 함수

function ajax함수(URL){
  return new Promise((성공,실패)=>{
    $.get(URL).done(function(결과){
      성공(결과);
    })
  })
}

