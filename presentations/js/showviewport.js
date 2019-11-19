/**
 * Plugin A - An example plugin
 *
 * Description...
 *
 * Copyright 2016 Firstname Lastname, email or github handle
 * Released under the MIT license.
 */
(function (document, window) {
    var root;
    var api;
    var lib;

    const viewPortShowerStyles = `
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    width: 1020px;
    height: 760px;
    box-sizing: content-box;
    z-index: 10000;
    pointer-events: none;
    `

    const viewPortShowerBorder = `
    border: 1px solid red;
    `

    const viewPortShowerBackdrop = `
    box-shadow: 0 0 0 300vw black;
    `

    document.addEventListener("impress:init", function (event) {
        root = event.target;
        api = event.detail.api;
        lib = api.lib;

        const viewportShower = document.getElementById("viewport")
        const border = viewportShower.dataset.border || false;
        const backdrop = viewportShower.dataset.backdrop || false;

        if(viewportShower){
            let style = viewPortShowerStyles;
            if(border) style += viewPortShowerBorder;
            if(backdrop) style += viewPortShowerBackdrop;

            viewportShower.style = style;
            root.appendChild(viewportShower);
        }
    })
})(document, window);