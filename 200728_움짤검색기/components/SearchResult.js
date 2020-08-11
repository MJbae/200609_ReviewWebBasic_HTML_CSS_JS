function SearchResult(data, $target) {
  this.images = data;
  this.targetContainer = $target;

  this.render = () => {
    const htmlString = `${this.images
      // this.images 중 필요한 데이터만 사용하기 위해 destructuring 문법 사용
      .map(({ imageUrl, title }) => `<li><img src="${imageUrl}" alt=${title}></li>`)
      .join('')}`;

    this.targetContainer.innerHTML = htmlString;
  };

  this.setState = (newData) => {
    this.images = newData;
    this.render();
  };
}

export default SearchResult;