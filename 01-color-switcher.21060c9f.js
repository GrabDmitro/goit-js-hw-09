const t={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};var e=null;function o(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.stop.disabled=!0,t.start.addEventListener("click",(a=>{t.body.style.backgroundColor=o(),e=setInterval((()=>t.body.style.backgroundColor=o()),1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(o=>{t.start.disabled=!1,t.stop.disabled=!0,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.21060c9f.js.map