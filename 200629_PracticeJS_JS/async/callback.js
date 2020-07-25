'use strict';

// 콜백함수의 구분, 동기와 비동기
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');


// 동기, 즉각적으로 함수 실행
/* */
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

// 비동기, 특정 조건 만족 시 함수 실행
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callabck'), 2000);

// 콜백 지옥 예제
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                // TODO: onSuccess의 매개변수 id는 어떻게 사용되는가?
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000); 
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            // 아래의 user의 값은 어디에서 받는가?
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);       
    }
}

const userStorage = new UserStorage();
const id = prompt('enter id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, your role is ${userWithRole.role}`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);