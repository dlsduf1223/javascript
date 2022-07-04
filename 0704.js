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
