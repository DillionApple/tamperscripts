// ==UserScript==
// @name         Bloomberg Hacker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hack Bloomberg's subscription limit 2
// @author       DillionMango@gmail.com
// @match        https://www.bloomberg.com/news/*
// @match        https://www.bloomberg.com/opinion/articles/*
// @grant        none
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.0.min.js
// ==/UserScript==


(function() {
    'use strict';

    const callback = function() {
        console.log("checking body node");
        let bodyNode = $("body");
        bodyNode.css("overflow", "auto");
        let paywall = $("#graphics-paywall-overlay");
        paywall.remove();
        console.log("finished");
        /*
        if (bodyNode.attr("data-paywall-overlay-status") != null) {
            bodyNode.removeAttr("data-paywall-overlay-status");
            console.log("body node attr deleted");
            const iframeNode = $("#graphics-paywall-overlay");
            if (iframeNode) {
                iframeNode.remove();
                console.log("iframe node deleted");
            }
            console.log("finished");
        }
        */
    };

    const monitoringNode = document.getElementsByTagName("body")[0];
    const config = {attributes: true};
    const mo = new MutationObserver(callback);
    mo.observe(monitoringNode, config);


})();
