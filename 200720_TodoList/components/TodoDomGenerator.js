//TODO: components 폴더로 옮김에 따라 function 선엄함
// this 사용하기 위해
//TODO: 왜 this를 사용해야 하나?

// App() 인스턴스 생성 시, elementDom 동적 생성
function TodoDomGenerator(elementId) {
  this.elementId = elementId;
  const newDom = `
    <section id="${this.elementId}">
      <h2>${this.elementId}</h2>
      <ul class="content"></ul>
      <p>완료된 리스트의 갯수는 <span class="completedTotalNumber"></span>개입니다.      </p>
      <h3>+</h3>
      <input type="text" name="addList" placeholder="add List" required />
    </section>
  `;
  document.body.innerHTML += newDom;
}
export default TodoDomGenerator;