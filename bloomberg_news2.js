// ==UserScript==
// @name         Bloomberg Hacker 2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hack Bloomberg's subscription limit
// @author       DillionMango@gmail.com
// @match        https://www.bloomberg.com/news/*
// @grant        none
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.0.min.js
// ==/UserScript==


(function() {
    'use strict';

    const callback = function() {
        console.log("checking body node");
        const bodyNode = $(".middle-column");
        let sub_nodes = bodyNode.find("*");
        sub_nodes.css("display", "");
        let paywall = $(".paywall-inline-tout");
        paywall.remove();
        console.log("success");
    };

    const monitoringNode = document.getElementsByClassName("middle-column")[0];
    const config = {attributes: true, subtree: true, childList: true};
    const mo = new MutationObserver(callback);
    mo.observe(monitoringNode, config);


})();
