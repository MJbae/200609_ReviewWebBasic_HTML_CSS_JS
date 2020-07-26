// async & await
// 프로미스를 간략하게 활용하는 방법

/*
1. async
async 활용 시 아래의 코드를 본문과 같이 축약 가능

function fetchUser() {
  return new Promise((resolve, reject) => {
    // 네트워크 요청 시 10초 이상 소요
    resolve('manjin');
  });
}
 */

async function fetchUser() {
  return 'manjin';
}

const user = fetchUser();
// 아래는 다음의 축약형, user.then(value => console.log(value));
user.then(console.log)
console.log(user)

// 2. await
function delay(ms) {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, ms))
}

async function getApple() {
  await delay(1000);
  return 'apple'
}

async function getBanana() {
  await delay(1000);
  return 'banana'
}

/*
아래 코드는 위와 같음
function getBanana() {
  return delay(3000).then(() => 'banana')
}
*/

/** await 사용 시, 직렬적으로 실행됨에 따라 총 2초 소요
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`
}
 */
/*
아래 코드는 위와 같음
function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => {
      return `${apple} + ${banana}`
    })
  })
}
 */

// 3. 병렬 수행
// 동시에 getApple과 getBanana를 병렬적으로 처리하기 때문에 총 1초 소요
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`
}
pickFruits().then(result => console.log(result))

// 4. Useful APIs

// 각각의 비동기함수 간 데이터처리의 연관성이 없을 경우,
// Promise.all 메서드 안의 배열로 전달하면 동시에 병렬처리하여 반환함
function pickAllFruits() {
  return Promise.all([getBanana(), getApple()])
    .then(fruits => fruits.join(' ++ '))
}
pickAllFruits().then(console.log)

// Promise.race 활용하여 비동기 함수 중 가장 먼저 처리되는 하나를 반환함
function pickOnlyOne() {
  return Promise.race([getBanana(), getApple()]);
}

pickOnlyOne().then(console.log)