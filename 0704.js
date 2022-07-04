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
