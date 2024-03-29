'use strict';

// Promise는 비동기처리를 위한 자바스크립트 제공 객체
// State: pending(처리 중), fulfilled(처리 완료), rejected(네트워크 이상)
// Producer vs Consumer

// 1. Producer
// new Promise가 생성되면, 자동으로 executor가 실행됨(사용자의 특정 네트워크 요청이 없어도)
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        //resolve('ellie');
        reject('no network')
    }, 2000);
});

// 2. Consumer: then, catch, finally
// value는 Producer에서 resolve의 매개변수로 전달한 값
// then은 producer가 성공적으로 실행될 때, 전달값을 처리하기 위해 사용
// catch는 rejectd의 전달값을 error로 처리할 때 사용
// finally는 producer 성공여부와 관계없이 마지막에 실행
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

// 3. Promise chanining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    // then의 return 값으로 객체 Promise를 받은 경우
    .then(num => console.log(num))


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => 달걀`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 프라이`), 1000);
    });

// Producer로부터 받은 값을 그대로 콜백함수의 매개변수로 넘길 때
// 콜백함수명만으로 코드를 정리할 수 있음
getHen()
    .then(getEgg)
    // 에러 발생 시 빵으로 대체함으로써 Promise Chain이 끊어지지 않도록 조치 가능
    .catch(error => {
        return '빵';
    })
    .then(cook)
    .then(console.log);
    // 에러 발생 부분 확인 가능
    // .catch(console.log)

/*
getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));
*/
