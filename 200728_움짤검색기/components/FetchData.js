// 이후 fuction으로 바꿔보자

const FetchData = async function (newKeyword) {
  if (!newKeyword) {
    return false;
  }
  const response = await fetch(`https://jjalbot.com/api/jjals?text=${newKeyword}`);

  return response.json();
}

export default FetchData;