!function(){refs={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};var t=null;function e(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}refs.stop.disabled=!0,refs.start.addEventListener("click",(function(r){refs.body.style.backgroundColor=e(),t=setInterval((function(){return refs.body.style.backgroundColor=e()}),1e3),refs.start.disabled=!0,refs.stop.disabled=!1})),refs.stop.addEventListener("click",(function(e){refs.start.disabled=!1,refs.stop.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.c441d42e.js.map