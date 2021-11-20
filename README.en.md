<p align="center">
  <img src="./src/assets/icons/icon_128.png">
</p>

<h1 align="center">onetab2</h1>

安装地址：[Bookmark - Chrome 网上应用店](https://chrome.google.com/webstore/detail/tabhome/niiapeibeibgagkbjbicpcljemedehcf)

---

[中文README](README.md)

Process bookmarks for Chrome\"Other Folders\". There are storage \"temporary\" bookmarks, classified save bookmarks, shortcut key operations, custom settings, quick view bookmarks, efficient management of bookmarks and more.

### 1 Features

##### 主页（展示）

![](README.assets/2021-11-02_111734.png)

[教程讨论（Tutorial discussion） · Issue #1 · rejerry/bookmark](https://github.com/rejerry/bookmark/issues/1)

[I have read the tutorial discussion; want more features or submit a bug? Tell me here.](https://github.com/rejerry/bookmark/issues/new)
#### Features

- "Temporary" bookmarks
- Waterfall stream bookmarks
- Drag and drop
- hot key
- Settings
- Icon (Icon) right-click menu
- Right click menu (page context menu)
- Support Chinese and English

#### 7 kinds of operations

- Display list
- Save the label on the left
- Save the label on the right
- Save selected tags
- Store unchecked labels
- Store all tags
- Store all tags for all windows

### 2 Q&A

##### What is bookmark?

Handles bookmarks that overflow from the bookmarks bar. Process bookmarks for Chrome\"Other Folders\".

##### Best practices

- "Temporary" bookmarks: (left side of the home page, black background) used to store temporary bookmarks, analogous to onetab; but unlike onetab, bookmarks on "temporary" bookmarks for "bookmark" are saved to chrome, which is no different from other bookmarks. After use, you can delete or save to “Waterfall Stream Bookmark”.
- Waterfall stream bookmark: (the right side of the homepage) uses a waterfall flow layout. You can modify the contents of the folder; drag and drop the merged folder. Large-scale changes are recommended to be modified in the bookmark manager, which is more efficient.
- Number of folder bookmarks: No limit; recommended not too many, no more than 20.

##### What is the "BPF" folder?

The "BPF" folder is set to store "temporary" bookmarks.

If there are more than one, only one will be displayed; please keep a folder with only one "BPF"; it is recommended to put it under the first layer of "Other Folders" and set it to the top.

##### "Waterfall Streaming Bookmarks" Why There Is No Folder View

The waterfall stream bookmarks are designed with waterfall flow, 4 columns, each column can hold 35+ bookmarks. A single page can hold 150+ bookmarks. 6 pages can hold nearly 1k bookmarks

##### Synchronize

Bookmark is just to help manage and view chrome "other bookmarks", data synchronization is provided by google.

##### Compatible

Only developed and tested in chrome. But the theory supports other browsers that can install the chrome plugin. [兼容讨论（Compatible discussion） · Issue #2 · rejerry/bookmark](https://github.com/rejerry/bookmark/issues/2)

##### Others

Empty folders are not displayed by default

### 3 Installation

[Bookmark - Chrome 网上应用店](https://chrome.google.com/webstore/detail/bookmark/paigdnkkmodopofccgdeacgoocgeijkn/related?hl=zh-CN&gl=US)

### 4 Development

Build your own from following steps：
- Clone this repo
- Install dependencies (use `yarn` command)
- Auto reload (use `yarn dev` command)
- Click LOAD UNPACKED button and select ./dist path
- Build (use `yarn build` command)

### 5 License

GPL3.0

### 6 Thanks 

Partial reference [cnwangjie/better-onetab: A better OneTab for Chrome & Firefox] (https://github.com/cnwangjie/better-onetab), thank you!

### 7 Author

jerry · [rejerry(github)](https://github.com/rejerry)

### 8 At last

Thank you for watching; Welcome to install and use, discuss bug, discuss function 3 linked.Feel free to comment below

Thanks  [cnwangjie/better-onetab: A better OneTab for Chrome & Firefox](https://github.com/cnwangjie/better-onetab)