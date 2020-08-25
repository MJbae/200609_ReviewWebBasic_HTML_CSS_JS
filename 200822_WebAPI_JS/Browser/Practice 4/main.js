/**
 * 1. UI 생성
 *  - 화면 상 이미지, 선, 텍스트(document.documentElement size) 표시
 *  - 우선 기준점(좌상단)에 배치
 * 2. 이벤트 생성
 *  - mousemove 활용, moving 감지 시 아래와 같이 작동함
 *  - 이미지(좌표따라), 선(top, left, bottom 등 활용), 텍스트(px로 중앙에서 아래로) 움직임
 *  1. mousemove event 발생
 *  2. 좌표값 생성
 *  3. 이미지, 텍스트, 선은 해당 좌표값에 따라 이동
 */

const moveImg = document.querySelector(".move-image");
const moveCordinates = document.querySelector(".move-cordinates");
const moveHorizonLine = document.querySelector(".horizon");
const moveVerticalLine = document.querySelector(".vertical");

window.addEventListener("mousemove", (event) => {
  moveImg.style.left = event.clientX - 50 + "px";
  moveImg.style.top = event.clientY - 50 + "px";

  moveCordinates.style.left = event.clientX + 20 + "px";
  moveCordinates.style.top = event.clientY + 20 + "px";
  moveCordinates.innerHTML = `${event.clientX}px, ${event.clientY}px`;

  moveHorizonLine.style.height = event.clientY + "px";
});
