/**
 * App 작성 순서
 * 1. dom 요소 할당 받음
 * 2. dom 요소에 이벤트 추가
 *  가. 이벤트 발생에 따른 데이터 처리
 * 3. 데이터 처리 부분 로직 추가
 * 4. 렌더링 부분 로직 추가
 * 5. 렌더링
 * 
 * App 동작 순서
 * 1. 초기동작(이벤트 미발생)
 *  가. DOM 요소 할당 및 접근
 * 2. 이벤트 발생
 *  가. 
 */


import SearchResult from './SearchResult.js'
import FetchData from './FetchData.js'

function App() {
  const that = this;
  // event 미발생 시 data에 null 할당
  this.data = null;
  this.searchKeywordContainer = document.querySelector('#search-keyword');

  this.searchKeywordContainer.addEventListener('keyup', function (e) {
    //.json()의 반환값은 Promise로, JSON 형태로 본문을 해석한 결과값이 담겨있음
    const newKeyword = e.target.value;
    onSearchKeyword(newKeyword);
  });

  // await은 async function 안에서 사용 가능
  const onSearchKeyword = async (newKeyword) => {
    const responseData = await FetchData(newKeyword);
    if (responseData.length) {
      that.setState(responseData);
    }
  };

  this.render = () => {
    this.searchResultContainer = document.querySelector('#search-result');
    this.searchResult = new SearchResult(this.data, this.searchResultContainer);
  };

  this.setState = (data) => {
    this.searchResult.setState(data);
  };

  this.render();
};

export default App