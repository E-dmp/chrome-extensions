/**
 * Google 検索バーに入力された文字を取得sる
 */
const getSearchBarWords = () => {
    let searchInputWords = document.querySelector("[name='q']").value;
    console.log(searchInputWords)
  };


chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
        // クリックされたタブを対象にする
		target: { tabId: tab.id },
		function: getSearchBarWords
	});
});


// ex : Laravel Error
// InvalidArgumentException View [xxxxx] not found.


