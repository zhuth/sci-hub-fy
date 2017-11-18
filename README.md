Sci-Hub-Fy
==========

Chrome extension that appends ".sci-hub.cc" to active tab domain, allowing free access to scientific articles. -- Now ported to Firefox. See [Releases] if you want to use signed .xpi files for installation. (Use at your own risk!)

The hard work is done by [Sci-Hub].

**Note:** The extension got removed from Chrome Store as they "don't allow products or services that facilitate unauthorized access to content on websites, such as circumventing paywalls or logins restrictions.". Of course you can just manually append the ".sci-hub.cc", but if you still want to automate this, the instructions below should make it work.

## Installation

You can load it as an unpacked extension in developer mode on Chrome. Follow this instructions:

1. Clone this repo: `git clone https://github.com/allanino/sci-hub-fy.git`. Take note where you cloned it.
2. Open Chrome and access `chrome://extensions`, or just open the menu -> settings -> extensions.
3. Check the developer mode in upper right.
4. Click "Load unpacked extension" button
5. Select the folder into which you cloned **Sci-Hub-Fy** and click "Open".
6. We're done. The extension should be available as if installed from Chrome store.

## Context menu

Another way of using this extension is through the context menu (right-click):

- Link context: if you right-click a link and select Sci-Hub-Fy, we append ".sci-hub.cc" to the link and redirect you to it.
- Page context: if you right-click anywhere but a link in a page, we append ".sci-hub.cc" to the page's URL and redirect you to it (the same as clicking in the extension icon).

[Sci-Hub]:http://sci-hub.cc
[Releases]:https://github.com/zhuth/sci-hub-fy/releases
