(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__1F3B3",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__2JZXT"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__16oDY",modal:"Modal_modal__3v6eV"}},22:function(e,t,a){e.exports={container:"Container_container__378Xj"}},24:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__xiqkf"}},25:function(e,t,a){e.exports={button:"Button_button__31AXE"}},27:function(e,t,a){e.exports={loader:"Loader_loader__1AGbB"}},28:function(e,t,a){e.exports={section:"Section_section__3Osah"}},37:function(e,t,a){},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__aHhRm",searchForm:"Searchbar_searchForm___nLxT",searchFormButton:"Searchbar_searchFormButton__3Ll_D",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__3iPiS",searchFormInput:"Searchbar_searchFormInput__1YX9m"}},76:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(4),i=a.n(o),s=(a(34),a(35),a(36),a(37),a(6)),u=a(22),l=a.n(u);function m(e){var t=e.children;return Object(n.jsx)("div",{className:l.a.container,children:t})}var b=a(13),j=a(5),h=a(23),d=a.n(h),f={fetchImages:function(e){var t=e.query,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n;return d.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(r,"&key=").concat("19042677-37d14c32a93614679ae39c658","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}},g=a(11),O=a.n(g);function _(e){var t=e.webformatURL,a=e.largeImageURL,r=e.alt,c=e.onClick;return Object(n.jsx)("li",{className:O.a.imageGalleryItem,children:Object(n.jsx)("img",{src:t,"data-source":a,alt:r,onClick:c,className:O.a.imageGalleryItemImage})})}var x=a(24),v=a.n(x);function p(e){var t=e.images,a=e.onClick;return Object(n.jsx)("ul",{className:v.a.imageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,c=e.largeImageURL,o=e.tags;return Object(n.jsx)(_,{webformatURL:r,largeImageURL:c,alt:o,onClick:a},t)}))})}var y=a(25),I=a.n(y);function S(e){var t=e.onLoadMore;return Object(n.jsx)("button",{type:"button",className:I.a.button,onClick:t,children:"Load more"})}var L=a(26),w=a.n(L),F=a(27),k=a.n(F);function N(){return Object(n.jsx)(w.a,{className:k.a.loader,type:"Oval",color:"#00BFFF",height:80,width:80,timeout:3e3})}var C=a(28),G=a.n(C);function B(e){var t=e.children;return Object(n.jsx)("section",{className:G.a.section,children:t})}var E=a(7),R=a.n(E);function U(e){var t=e.onSubmit,a=Object(r.useState)(""),c=Object(j.a)(a,2),o=c[0],i=c[1];return Object(n.jsx)("header",{className:R.a.searchbar,children:Object(n.jsxs)("form",{className:R.a.searchForm,onSubmit:function(e){if(e.preventDefault(),""===o.trim())return s.b.warning("Enter your query"),void t(o);t(o)},children:[Object(n.jsx)("button",{type:"submit",className:R.a.searchFormButton,children:Object(n.jsx)("span",{className:R.a.searchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:R.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){i(e.currentTarget.value.toLowerCase())}})]})})}var q=a(12),M=a.n(q),T=document.querySelector("#modal-root");function P(e){var t=e.largeImgURL,a=e.alt,c=e.onClose;Object(r.useEffect)((function(){function e(e){"Escape"===e.code&&c()}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[c]);return Object(o.createPortal)(Object(n.jsx)("div",{className:M.a.overlay,onClick:function(e){e.currentTarget===e.target&&c()},children:Object(n.jsx)("div",{className:M.a.modal,children:Object(n.jsx)("img",{src:t,alt:a})})}),T)}function X(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)([]),i=Object(j.a)(o,2),u=i[0],l=i[1],m=Object(r.useState)(1),h=Object(j.a)(m,2),d=h[0],g=h[1],O=Object(r.useState)(!1),_=Object(j.a)(O,2),x=_[0],v=_[1],y=Object(r.useState)(!1),I=Object(j.a)(y,2),L=I[0],w=I[1],F=Object(r.useState)(""),k=Object(j.a)(F,2),C=k[0],G=k[1],E=Object(r.useState)(""),R=Object(j.a)(E,2),q=R[0],M=R[1];Object(r.useEffect)((function(){if(""!==a){!function(){var e={query:a,currentPage:d};v(!0),f.fetchImages(e).then((function(e){l((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e))})),0!==e.length||s.b.error("Nothing was found")})).catch((function(e){return e})).finally((function(){return v(!1)}))}()}}),[d,a]);var T=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})}),500)},X=function(){w(!L)},D=u.length>0&&!x;return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{onSubmit:function(e){e!==a&&(l([]),c(e),g(1))}}),Object(n.jsx)(p,{images:u,onClick:function(e){G(e.target.dataset.source),M(e.target.alt),X()}}),L&&Object(n.jsx)(P,{largeImgURL:C,alt:q,onClose:X}),x&&Object(n.jsx)(N,{}),Object(n.jsx)(B,{children:D&&Object(n.jsx)(S,{onLoadMore:function(){g(d+1),T()}})})]})}function D(){return Object(n.jsxs)(m,{children:[Object(n.jsx)(X,{}),Object(n.jsx)(s.a,{autoClose:3e3})]})}i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.de2ff4e3.chunk.js.map