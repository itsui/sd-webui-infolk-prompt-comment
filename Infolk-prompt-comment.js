// ==UserScript==
// @name         Comment prompt
// @Author URL    https://civitai.com/user/infolk
// @version      1.0
// @description  Prompt will ignore any line starting with #
// @author       Infolk
// @match        https://stable-diffusion-webui-automatic1111.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var promptOrig = window.prompt;
    window.prompt = function (text, defaultText) {
        if (text.startsWith("#")) {
            return null;
        }
        return promptOrig(text, defaultText);
    };
})();
