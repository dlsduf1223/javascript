//데이터 타입

var 변수 = 1; //변수 지정
var 어레이 = [1, 2, 3, 4]; // 변수에 Reference가 저장됨(화살표)

var obj = { name: "kim" }; // 어레이와 오브젝트는 reference 저장(화살표)

var 이름1 = "김";
var 이름2 = 이름1; // '복사'라고 한다.

이름1 = "박"; // 이름1='김', 이름2='박' 이름1의 값을 변경해도 이름2와 무관하다.

var 이름1 = { name: "김" };
var 이름2 = 이름1;
이름1.name = "박";

//이름1.name => '박' , 이름2.name => '김' :::  Why?? Reference data type은 직접 data를 넣는게 아닌 위치를 저장하는 것이기에 출력 값을 공유하게 된다.

/*--------------------------------------------------------------------------------------------------*/

function 변경(obj) {
  obj.name = "park";
}

변경(이름1); // 위와 같은 코드로 서로 다른 오브젝트의 값을 변경해줄 수 있다.

// 파라미터는 '변수생성'과 '할당'이 생성과 동시에 이루어짐 obj.라는 새로운 파라미터로 화살표를 재할당함..

/*--------------------------------------------------------------------------------------------------*/
//생성자란? (Constructor)
//object를 마구 복사하고 싶을때

function 기계(이름) {
  this.name = 이름;
  this.age = 15;
  this.sayHi = function () {
    console.log("안녕 나는" + this.name + "이야");
  };
}

var 학생1 = new 기계("park");
var 학생2 = new 기계("kim");

// 생성자로 생성된 오브젝트를 'instance'라고 함

/*--------------------------------------------------------------------------------------------------*/
//prototype(유전자)

// 기계(constructor)를 만들면, 몰래 prototype이 생성된다.

기계.prototype.gender = "남";

학생1.gender; // '남'

//(1)학생1이 직접 gender를 가지고 있는지 스캔
//(2)학생1 오브젝트의 부모의 유전자(prototype)에 gender를 가지고 있는지 스캔, 그 위의 상속관계가 더 있으면 계속 올라가서 찾아냄

학생.toString();

var arr = [1, 2, 3];
var arr = new Array(1, 2, 3); //Array라는 생성자로 만드는 새로운 오브젝트이기 때문에 Array는 모든 어레이들의 부모다. 따라서

arr.map();
arr.sort();
arr.push(); // 등 Array의 유전자(prototype)에 내장되어있는 함수(메소드)들을 쓸 수 있는 것.

//마찬가지로 모든 오브젝트는 object. 라는 부모를 가지므로 object.prototype에 존재하는 toString()같은 함수(메소드)를 사용할 수 있는 것

/*--------------------------------------------------------------------------------------------------*/
//__proto__

학생1.__proto__;
//바로 윗부모의 유전자를 검사하고 싶어...

var 부모 = { name: "kim" };
var 자식 = {};

자식.__proto__ = 부모; // 부모자식관계 등록.
자식.name; // 'kim'

/*--------------------------------------------------------------------------------------------------*/
//에제1

function 기계(이름, 나이) {
  this.name = 이름;
  this.age = 나이;
  this.sayHi = function () {
    console.log("안녕 나는" + this.name + "이야");
  };
}

//예제3

Array.prototype.remove3 = function () {
  ///arr에게 물려주기 위해서 부모 Array의 prototype에 함수를 추가한 것....
  for (var i = 0; i < this.length; i++) {
    if (this[i] === 3) {
      this.splice([i], 1);
    }
  }
};

var arr = [1, 2, 3, 4];
arr.remove3();
console.log(arr);

/*--------------------------------------------------------------------------------------------------*/

//상속의 다른 방법

Object.create();

var 부모 = {
  name: "kim",
  age: 50,
};

var 자식 = Object.create(부모); //상속관계 설정

자식.age = 20;

var 손자 = Object.create(자식); //그 아랫세대도 설정

/*--------------------------------------------------------------------------------------------------*/

class 부모 {
  constructor() {
    this.name = "kim";
  }
} //ES6의 constructor 만드는 법

var 자식 = new 부모();

//함수추가는

class 부모 {
  constructor() {
    this.name = "kim";
    //직접 물려주게 되는 함수
  }

  //여기다가도 함수 추가 가능, prototype에 추가되는 함수
}

자식.__proto__;
부모.prototype;
Object.getPrototypeOf(자식);

//모두 같은 뜻.. 유전자검사를 하겠다..

/*--------------------------------------------------------------------------------------------------*/
//------extends/super-------//
//extends(class 상속): class를 즉 생성자를 여러개 만들때, 하드코딩하지말고 extends로 쓰면 된다.

class 할아버지 {
  constructor(name) {
    this.성 = "kim";
    this.이름 = "name";
  }
}

class 아버지 extends 할아버지 {
  constructor() {
    super(); //extends한 '할아버지'의 속성을 모두 재사용하겠다.... 즉, 위 할아버지 생성자의 this.성, this.이름을 의미하겠지
    this.나이 = 50; //extends해서 만든 class는 this를 바로 못끄고 super()다음에 써야합니다.
  }
}

var 아버지1 = new 아버지();

//파라미터가 있으면 super(name)처럼 괄호안에....

//constructor 밖에서의 super는 super.sayHi(0); 처럼 부모 프로토타입을 의미.. __proto__와 비슷한 의미다.

var 사람 = {
  name:'park',
  age:30,

  nextAge(){
    return this.age+1;
  },          //나이를 먹는 함수
  setAge(나이){
    this.age = 나이; 
  }           //나이를 설정하는 함수

}

사람.age+1; //처럼 직관적으로 쓰기 보다, 함수를 만들어서 데이터를 변경하는 편이 좋다.



// getter/setter :::: get: 데이터를 꺼내오는 함수, set: 데이터를 변경하는 함수
// 즉, 위 함수들 중

get nextAge(){

}
set setAge(나이){

}//이렇게 쓸 수 있다. 공통된 특징은 위 메쏘드를 사용할때 소괄호가 필요없다는 것, 마치 프로퍼티화 시키는 듯..
//like 사람.setAge=20;, 사람.getAge

//get 함수들은 "return"이 무조건 있어야하고, 파라미터가 없어야한다.
//set 함수들은 "parameter"가 무조건 1개만 있어야 한다.

/*--------------------------------------------------------------------------------------------------*/
//예제1

class 강아지{
  constructor(type,color){
    this.타입 = type;
    this.색 =color;
  }


}

var 강아지1 = new 강아지('말티즈', 'white');
var 강아지2 = new 강아지('진돗개','brown');

//예제2
class 고양이 extends 강아지{
  constructor(type,color,age){
    super(type,color);
  this.나이=age;
  }
  get nextAge(){
    return age+1;

  }
}

//예제3 : 한살먹기 함수...