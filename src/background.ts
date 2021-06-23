/* --------------------------------------------------*/
/*        Switch according to the environment        */
const baseUrl = new URL("https://linq.trap.games");
// const baseUrl = new URL("http://localhost:3002");
/* --------------------------------------------------*/

const baseApiUrl = new URL("/api/entry", baseUrl);
const iconUrl =
  "data:image/png;base64,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";

const notify = async (title: string, message: string) => {
  const options: chrome.notifications.NotificationOptions = {
    type: "basic",
    title,
    message,
    iconUrl,
  };

  try {
    const res = await Notification.requestPermission();
    if (res !== "granted") return;

    chrome.notifications.onClicked.addListener(() => {
      void chrome.tabs.create({ url: baseUrl.toString() });
    });
    chrome.notifications.create("create", options);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    chrome.notifications.clear("create");
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    alert(`${title}\n${message}\n(desktop notification rejected: ${err})`);
  }
};

const saveToLinq = async (tab: chrome.tabs.Tab) => {
  if (tab.url === undefined) return;
  const url = new URL(tab.url, baseApiUrl);
  const title: string = tab.title ? tab.title : "";
  const tags: string[] = [];

  // タグを追加
  let tag: string | null = "tag";
  while (tag !== null) {
    tag = prompt("タグを追加(空文字で終了)");
    if (!tag) break;
    tags.push(tag);
  }

  if (!url.toString().startsWith("http")) return;

  const query = { url, title, tags };

  const param = {
    method: "PUT",
    body: JSON.stringify(query),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch(baseApiUrl.toString(), param);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await res.json();

    console.log(JSON.stringify(data));
    await notify("Page Bookmarked!", title);
  } catch (err) {
    console.log(err);
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    await notify(`Bookmark Failed...`, `${err}`);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // インストール時に実行
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "saveToLinq",
      title: "Save to linQ",
    });
  });

  // ショートカットキーをプッシュ時に実行
  chrome.commands.onCommand.addListener(
    (command: string, tab: chrome.tabs.Tab) => {
      if (command === "save") {
        void saveToLinq(tab);
      }
    }
  );

  // メニューをクリック時に実行
  chrome.contextMenus.onClicked.addListener((_, tab) => {
    if (tab !== undefined) {
      void saveToLinq(tab);
    }
  });
});
