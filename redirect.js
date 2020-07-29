// ==UserScript==
// @name         Baidu Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.baidu.com/
// @include      https://v2ex.com/
// @include      https://coinmarketcap.com/
// @include      https://*.bilibili.com/
// @include      https://*.apple.*/
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';
    document.body.remove();
    window.location.href = "https://www.bing.com";
})();
