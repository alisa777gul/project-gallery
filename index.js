import{a as c}from"./assets/vendor-Cn2Vr82J.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function a(o){const t="https://api.unsplash.com",s="LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc",i="/search/photos";try{return(await c.get(`${t}${i}`,{params:{client_id:s,query:o,page:1,per_page:12,orientation:"portrait"}})).data}catch(e){console.error(e)}}const n={gelleryForm:document.querySelector(".gellery-form"),gelleryList:document.querySelector(".gallery-list"),gelleryLoader:document.querySelector(".loader")};function u(o){return o.map(t=>` <li class="gallery-item"><img src="${t.urls.small}" alt="${t.description}"></li>`).join("")}function d(){n.gelleryLoader.classList.remove("is-hidden")}function f(){n.gelleryLoader.classList.add("is-hidden")}n.gelleryForm.addEventListener("submit",p);async function p(o){o.preventDefault(),n.gelleryList.innerHTML="",d();const t=o.currentTarget.elements.search.value.trim();try{const s=await a(t);n.gelleryList.innerHTML=u(s.results)}catch(s){console.log(s)}finally{f()}}
//# sourceMappingURL=index.js.map
