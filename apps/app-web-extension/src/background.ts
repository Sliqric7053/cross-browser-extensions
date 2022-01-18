/* eslint-disable @typescript-eslint/no-non-null-assertion */
// chrome.runtime.onInstalled.addListener(function () {

console.log('chrome', chrome);

chrome.action.onClicked.addListener(btnClicked);

function btnClicked(tab: chrome.tabs.Tab) {
  console.log('🚀 ~ file: background.ts ~ line 19 ~ tab ~ tab', tab);

  chrome.tabs.sendMessage(tab.id!, 'yingyang');
}
// });
