/**
 * 구현 못한 것
 * 1. DocumentElement.clientWidth 값
 * 2. 브라우저 크기 변경에 따라 값 변경
 */

const listContents = [
  {
    text: "window.screen",
    height: window.screen.height,
    width: window.screen.width,
  },
  {
    text: "window.outer",
    height: window.outerHeight,
    width: window.outerWidth,
  },
  {
    text: "window.inner",
    height: window.innerHeight,
    width: window.innerWidth,
  },
  {
    text: "DocumentElement.clientWidth",
    height: 1,
    width: 1,
  },
];

let listDOM = document.querySelector(".listContents");
listDOM.innerHTML = listContents
  .map((listContent) => {
    const { text, height, width } = listContent;
    return `<li>${text}: ${height} ${width}</li>`;
  })
  .join("");
