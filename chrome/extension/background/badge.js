chrome.storage.local.get(null, (store) => {
  let text = (store.count) ? store.count : 0
  chrome.browserAction.setBadgeText({ text: text.toString() });
})

chrome.storage.onChanged.addListener((changes, namespace) => {
  chrome.browserAction.setBadgeText({ text: changes.count.newValue.toString() });
})
