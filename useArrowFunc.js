// 자바스크립트의 이름 있는 함수 선언
// [1] 기본함수
function add(first, second) {
    return first + second;
}

// [2] 계단형 함수
function addNum(num) {
    return function(value) {
        return num + value;
    }
}

// 자바스크립트의 익명함수 선언
var add = function (first, second) {
    return first + second;
};

// ES6 화살표 함수 사용
// [1] 기본함수
var add = (first, second) => {
    return first + second;
};

// [2] 계단형 함수
var addNum = num => value => num + value;
