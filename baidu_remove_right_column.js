// ==UserScript==
// @name         Baidu Remove Right Column Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==


(function() {
    'use strict';

    const setup_mo = function() {
        const monitoringNode = document.documentElement;
        const config = { attributes: true, childList: true, subtree: true };
        const mo = new window.MutationObserver(window.fun_callback);
        window.mo = mo
        window.mo.observe(monitoringNode, config);
    }

    const callback = function() {
        // console.log("calling checking function");
        // window.mo.disconnect();
        const rightColumn = $("#content_right");
        if (rightColumn != null) {
            rightColumn.fadeOut();
            // console.log("right column deleted");
        }
        // window.fun_setup_mo();
    };
    const init = function() {
        const iframe = document.createElement("iframe");
        iframe.display = 'none';
        document.body.appendChild(iframe);
        window.MutationObserver = iframe.contentWindow.MutationObserver;
        window.fun_callback = callback;
        window.fun_setup_mo = setup_mo;
    }

// 1. Bad
//     window.addEventListener('locationchange', callback);
// 2.  Good
    const interval = setInterval(callback, 500);
// 3.  Bad
//     $("#content_right").css({"visibility": "hidden"})
// 4.  Bad
//     init();
//     window.fun_setup_mo();
// 5. Bad
//     document.callback = callback();
//     document.callback();
//     $("$su").on("click", function() {
//         console.log("clicked");
//         document.callback()
//     });
// 6. Bad
//     init();
//     window.fun_setup_mo();

})();
