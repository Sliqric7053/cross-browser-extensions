// https://developer.chrome.com/docs/extensions/mv3/content_scripts/

chrome.runtime.onMessage.addListener(backgroundMsg);

function backgroundMsg(message: any, sender: any, sendResponse: any) {
  const filter = document.documentElement.style.getPropertyValue('filter');
  const isDark = 'invert(1) hue-rotate(180deg)';

  chrome.storage.local.set({ filter: filter }, function () {
    console.log('Value is set to ' + filter);
  });

  darkLite();

  function darkLite() {
    chrome.storage.local.get(['filter'], function (result) {
      console.log('Value currently is ' + result['filter']);
      result['filter'] != isDark ? darkSide() : liteSide();
    });
  }

  function darkSide() {
    document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
    document.body
      .querySelectorAll<HTMLElement>('img, picture, video')
      .forEach((el) => (el.style.filter = 'invert(1) hue-rotate(180deg)'));
  }

  function liteSide() {
    document.documentElement.style.filter = 'none';
    document.body
      .querySelectorAll<HTMLElement>('img, picture, video')
      .forEach((el) => (el.style.filter = 'none'));
  }
}
