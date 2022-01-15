const darkSide = `
document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
document.body
  .querySelectorAll('img, picture, video')
  .forEach((el) => (el.style.filter = 'invert(1) hue-rotate(180deg)'));
`;
const liteSide = `
document.documentElement.style.filter = 'none';
document.body
  .querySelectorAll('img, picture, video')
  .forEach((el) => (el.style.filter = 'none'));
`;

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: 'goldenrod' }, function () {
    console.log('The color is green.');
  });
  chrome.storage.sync.set(
    { isDark: false, darkSide: darkSide, liteSide: liteSide }
    // function (data) {
    //   console.log('bground > isDark', data);
    // }
  );
  // listen for saved changes
  chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (const key in changes) {
      const storageChange = changes[key];
      console.log(
        'Storage key "%s" in namespace "%s" changed. ' +
          'Old value was "%s", new value is "%s".',
        key,
        namespace,
        storageChange.oldValue,
        storageChange.newValue
      );
    }
  });
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  //   chrome.declarativeContent.onPageChanged.addRules([
  //     {
  //       conditions: [
  //         new chrome.declarativeContent.PageStateMatcher({
  //           // pageUrl: { hostEquals: 'developer.chrome.com' },
  //         }),
  //       ],
  //       actions: [new chrome.declarativeContent.ShowPageAction()],
  //     },
  //   ]);
  // });
});
