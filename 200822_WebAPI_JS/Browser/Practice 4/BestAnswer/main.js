const target = document.querySelector(".target");
const tag = document.querySelector(".tag");
const horizonLine = document.querySelector(".horizon");
const verticalLine = document.querySelector(".vertical");

// TODO: clientX와 offsetX의 차이는?
window.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  verticalLine.style.left = `${x}px`;
  horizonLine.style.top = `${y}px`;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;

  tag.innerHTML = `${x}px, ${y}px`;
});
