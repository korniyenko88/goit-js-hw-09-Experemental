import{S as m}from"./assets/vendor-10cb7c31.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const d=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],g=t=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${t.original}">
      <img
        class="gallery-image"
        src="${t.preview}"
        alt="${t.description}"
      />
    </a>
  </li>
    `,h=d.map(t=>g(t)).join(""),u=document.querySelector(".gallery");u.innerHTML=h;const p=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});p.on("show.lightbox",()=>{const t=p.selectedElement.querySelector("img").alt;p.setCaption(t)});const f=()=>`
    <form class="feedback-form" autocomplete="off">
        <label>
            Email
            <input type="email" name="email" autofocus />
        </label>
        <label>
            Message
            <textarea name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
    </form>`,y=document.querySelector(".task-form");y.innerHTML=f();const a={email:"",message:""},i=document.querySelector(".feedback-form"),c=JSON.parse(localStorage.getItem("feedback-form-state"));c&&(a.email=c.email||"",a.message=c.message||"",i.email.value=a.email,i.message.value=a.message);i.addEventListener("input",t=>{const{name:r,value:s}=t.target;a[r]=s.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))});i.addEventListener("submit",t=>{if(t.preventDefault(),!a.email||!a.message){alert("Fill please all fields");return}console.log(a),localStorage.removeItem("feedback-form-state"),a.email="",a.message="",i.email.value="",i.message.value=""});
//# sourceMappingURL=commonHelpers3.js.map
