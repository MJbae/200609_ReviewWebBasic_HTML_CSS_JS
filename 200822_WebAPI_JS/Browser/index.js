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
