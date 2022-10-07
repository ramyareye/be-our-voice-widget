(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Dosis:wght@300;500&display=swap";.widget-wrapper.fixed{position:fixed;top:10px;left:10px}.widget-wrapper.fixed[class*=bottom]{top:auto;bottom:10px}.widget-wrapper.fixed[class*=center]{left:50%;transform:translate(-50%)}.widget-wrapper.fixed[class*=right]{left:auto;right:10px}.widget-wrapper .dismiss-widget{position:absolute;width:16px;height:16px;background:#181818;color:#fff;border-radius:50%;top:0;right:0;display:flex;align-items:center;justify-content:center;font-size:15px;line-height:0px;cursor:pointer;transform:translate(5px) translateY(-5px)}.widget-wrapper.mobile-mode .dismiss-widget{display:none}.widget-wrapper.dark .dismiss-widget{background-color:#999}.widget{background-color:#fff;padding:6px;display:flex;width:auto;border:1px solid #ddd;overflow:hidden;box-shadow:0 0 10px -5px #0006;transition:all ease .4s}.rounded .widget{border-radius:8px}.oval .widget{border-radius:4em}.detached .widget{height:auto;border:none;box-shadow:none;background:transparent}.widget.closed{opacity:.8;transition:all ease .4s;cursor:pointer}.widget.closed:hover{opacity:1}.widget-image{margin-right:1rem;transition:all ease .4s}.widget-image img{display:block}.widget-text{display:flex;flex-direction:column;justify-content:space-around;align-items:space-around;margin-right:2rem;font-family:Dosis,sans-serif;white-space:nowrap;opacity:1;transition:all ease .4s;max-width:400px}.widget.closed .widget-image{margin:0;transition:all ease .4s}.widget.closed .widget-text{opacity:0;margin:0;transition:all ease .4s;max-width:0}.widget-text p{color:#999}.widget-text span{color:#3a3a3a}.widget-action,.widget-action span{color:#3a86ff;cursor:pointer}.dark .widget{background-color:#181818}.dark .widget .widget-text span{color:#ccc}.dark .widget .widget-text strong{color:#fff}.rounded .widget .widget-image img{border-radius:8px}.oval .widget .widget-image img{border-radius:4em}.detached .widget .widget-image{margin-right:.5rem}.detached .widget .widget-image img{width:76px;border-radius:8px}.detached .widget .widget-text{box-shadow:0 0 10px -5px #0006;padding:10px 15px;margin-right:0;border:1px solid #ddd;border-radius:8px;background-color:#fff}.detached.dark .widget{background:transparent}.detached .widget.closed{max-width:76px}.detached.dark .widget .widget-text{background-color:#181818}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var w=Object.defineProperty;var E=(e,A,i)=>A in e?w(e,A,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[A]=i;var l=(e,A,i)=>(E(e,typeof A!="symbol"?A+"":A,i),i);(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();var u=(e=>(e["top-left"]="top-left",e["top-center"]="top-center",e["top-right"]="top-right",e["bottom-left"]="bottom-left",e["bottom-center"]="bottom-center",e["bottom-right"]="bottom-right",e))(u||{});const m="data:image/jpeg;base64,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";class B{constructor(){l(this,"name","base");l(this,"imageId",0);l(this,"el");l(this,"wrapperEl")}get template(){return`<div class="widget">
            <div class="widget-image">
                <img src="${m}" alt="Mahsa Amini" title="We Are Mahsa Amini" />
            </div>
            <div class="widget-text">
                <div class="widget-title">
                    <span>Woman, </span>
                    <span>Life, </span>
                    <span>Freedom</span>
                </div>

                <a role="button" class="widget-action">
                    Stand with #MahsaAmini 
                    <span>></span>
                </a>
            </div>
        </div>`}switchToMobile(){var i,o,t,a;(i=this.el)==null||i.classList.add("closed"),(t=(o=this.wrapperEl)==null?void 0:o.parentElement)==null||t.classList.add("mobile-mode");const A=()=>{var s;this.switchToDesktop(),(s=this.el)==null||s.removeEventListener("click",A)};(a=this.el)==null||a.addEventListener("click",A)}switchToDesktop(){var A,i,o;(A=this.el)==null||A.classList.remove("closed"),(o=(i=this.wrapperEl)==null?void 0:i.parentElement)==null||o.classList.remove("mobile-mode")}render(A,i){i!=null&&i.imageId&&(this.imageId=i==null?void 0:i.imageId);const o=document.createElement("template"),t=document.createElement("div");return t.id=this.name,o.innerHTML=this.template,o.content.firstChild&&(t.appendChild(o.content.firstChild),A.appendChild(t),A==null||A.addEventListener("closeClick",()=>{this.switchToMobile()})),this.el=A==null?void 0:A.querySelector(".widget"),this.wrapperEl=t,t}}const S="data:image/jpeg;base64,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",U="data:image/jpeg;base64,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",j="data:image/jpeg;base64,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";class y extends B{constructor(){super(...arguments);l(this,"name","layout1");l(this,"images",[S,U,j])}get template(){return`<div class="widget ${this.name}">
            <div class="widget-image">
                <img src="${this.images[this.imageId]}" alt="Mahsa Amini" title="We Are Mahsa Amini" />
            </div>
            <div class="widget-text">
                <div class="widget-title">
                    <span>Woman, </span>
                    <span>Life, </span>
                    <span>Freedom</span>
                </div>

                <p>Stand with #MahsaAminio</p>

                <a role="button" class="widget-action">
                    See what you can do 
                    <span>></span>
                </a>
            </div>
        </div>`}}const d=[B,y],h=e=>typeof e>"u"||!d[e]?B:d[e];function Q(e){const A=document.querySelector(".widget-wrapper");A&&document.body.removeChild(A);const{position:i=u["top-left"],layout:o=0,dismissable:t=!0,theme:a="light",shape:s="normal",...r}=e,g=document.createElement("div");g.classList.add("widget-wrapper","fixed",a,i.toString(),s);const n=h(o),p=new n;if(!p)throw new Error(`Layout '${o}' was not found`);if(p.render(g,r),t){g.classList.add("dimissabled");const c=document.createElement("span");c.innerHTML="&#215;",c.classList.add("dismiss-widget"),g.appendChild(c),c.addEventListener("click",()=>{g.dispatchEvent(new CustomEvent("closeClick"))})}return document.body.appendChild(g),p}function G(){var o,t,a,s;const e=document.getElementById("be-irans-voice");let A;if(console.log({scriptElement:e}),e?A=(t=(o=e==null?void 0:e.getAttribute("src"))==null?void 0:o.split("?"))==null?void 0:t[1].split("&"):A=(s=(a=window.location.href)==null?void 0:a.split("?"))==null?void 0:s[1].split("&"),!A)return{};const i={};return A.forEach(r=>{const[g,n]=r.split("=");i[g]=typeof n>"u"?!0:n}),i}function R(){const e=G();Q(e),window.renderWidget=Q}R();
