(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{2137:function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,c,"next",e)}function c(e){r(i,a,o,s,c,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return a}})},8116:function(e,t,n){"use strict";var r;function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(o){var i=arguments,s=function(){var e=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g;return function(r,a,o,g){if(1!==i.length||"string"!==m(r)||/\d/.test(r)||(a=r,r=void 0),(r=r||0===r?r:new Date)instanceof Date||(r=new Date(r)),isNaN(r))throw TypeError("Invalid date");var f=(a=String(s.masks[a]||a||s.masks.default)).slice(0,4);"UTC:"!==f&&"GMT:"!==f||(a=a.slice(4),o=!0,"GMT:"===f&&(g=!0));var p=function(){return o?"getUTC":"get"},h=function(){return r[p()+"Date"]()},y=function(){return r[p()+"Day"]()},b=function(){return r[p()+"Month"]()},_=function(){return r[p()+"FullYear"]()},x=function(){return r[p()+"Hours"]()},j=function(){return r[p()+"Minutes"]()},v=function(){return r[p()+"Seconds"]()},w=function(){return r[p()+"Milliseconds"]()},M=function(){return o?0:r.getTimezoneOffset()},P=function(){return u(r)},T={d:function(){return h()},dd:function(){return c(h())},ddd:function(){return s.i18n.dayNames[y()]},DDD:function(){return l({y:_(),m:b(),d:h(),_:p(),dayName:s.i18n.dayNames[y()],short:!0})},dddd:function(){return s.i18n.dayNames[y()+7]},DDDD:function(){return l({y:_(),m:b(),d:h(),_:p(),dayName:s.i18n.dayNames[y()+7]})},m:function(){return b()+1},mm:function(){return c(b()+1)},mmm:function(){return s.i18n.monthNames[b()]},mmmm:function(){return s.i18n.monthNames[b()+12]},yy:function(){return String(_()).slice(2)},yyyy:function(){return c(_(),4)},h:function(){return x()%12||12},hh:function(){return c(x()%12||12)},H:function(){return x()},HH:function(){return c(x())},M:function(){return j()},MM:function(){return c(j())},s:function(){return v()},ss:function(){return c(v())},l:function(){return c(w(),3)},L:function(){return c(Math.floor(w()/10))},t:function(){return x()<12?s.i18n.timeNames[0]:s.i18n.timeNames[1]},tt:function(){return x()<12?s.i18n.timeNames[2]:s.i18n.timeNames[3]},T:function(){return x()<12?s.i18n.timeNames[4]:s.i18n.timeNames[5]},TT:function(){return x()<12?s.i18n.timeNames[6]:s.i18n.timeNames[7]},Z:function(){return g?"GMT":o?"UTC":(String(r).match(t)||[""]).pop().replace(n,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(M()>0?"-":"+")+c(100*Math.floor(Math.abs(M())/60)+Math.abs(M())%60,4)},p:function(){return(M()>0?"-":"+")+c(Math.floor(Math.abs(M())/60),2)+":"+c(Math.floor(Math.abs(M())%60),2)},S:function(){return["th","st","nd","rd"][h()%10>3?0:(h()%100-h()%10!=10)*h()%10]},W:function(){return P()},WW:function(){return c(P())},N:function(){return d(r)}};return a.replace(e,(function(e){return e in T?T[e]():e.slice(1,e.length-1)}))}}();s.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var c=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e},l=function(e){var t=e.y,n=e.m,r=e.d,a=e._,o=e.dayName,i=e.short,s=void 0!==i&&i,c=new Date,l=new Date;l.setDate(l[a+"Date"]()-1);var u=new Date;u.setDate(u[a+"Date"]()+1);return c[a+"FullYear"]()===t&&c[a+"Month"]()===n&&c[a+"Date"]()===r?s?"Tdy":"Today":l[a+"FullYear"]()===t&&l[a+"Month"]()===n&&l[a+"Date"]()===r?s?"Ysd":"Yesterday":u[a+"FullYear"]()===t&&u[a+"Month"]()===n&&u[a+"Date"]()===r?s?"Tmw":"Tomorrow":o},u=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var a=(t-n)/6048e5;return 1+Math.floor(a)},d=function(e){var t=e.getDay();return 0===t&&(t=7),t},m=function(e){return null===e?"null":void 0===e?"undefined":"object"!==a(e)?a(e):Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()};void 0===(r=function(){return s}.call(t,n,t,e))||(e.exports=r)}(void 0)},7463:function(e,t,n){"use strict";var r=n(5893),a=n(1664),o=n(4818),i=n.n(o);t.Z=function(e){var t=e.post;return(0,r.jsx)(a.default,{href:"/blog/[slug]",as:"/blog/".concat(t.slug),children:(0,r.jsxs)("a",{className:"aos-init ".concat(i().blogItemLink),"data-aos":"fade-up","data-aos-duration":"1000",children:[(0,r.jsx)("div",{className:i().blogItemImage,children:(0,r.jsx)("img",{src:"".concat(t.feature_image)})}),(0,r.jsxs)("div",{className:i().blogItemDetails,children:[(0,r.jsxs)("div",{className:i().blogItemTagAndTime,children:[(0,r.jsx)("p",{children:t.tags.length>0?t.tags[0].name:"Voyage"}),(0,r.jsx)("svg",{width:"3",height:"4",viewBox:"0 0 3 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("circle",{cx:"1.5",cy:"2",r:"1.5",fill:"#CBCBCB"})}),(0,r.jsxs)("p",{children:[t.reading_time," min read"]})]}),(0,r.jsx)("h2",{className:i().blogItemTitle,children:t.title}),(0,r.jsxs)("p",{className:i().blogItemExcerpt,children:[" ",t.excerpt," "]})]})]})})}},1563:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=n(530),o=n.n(a),i=(0,n(2082).Wm)({breakpoints:{sm:0,md:769,lg:1024,xl:1192}}),s=i.MediaContextProvider;i.Media;function c(){return(0,r.jsx)(s,{children:(0,r.jsx)("section",{id:o().blogPageBottomBlock,className:o().blogPageBottomBlock,children:(0,r.jsx)("div",{className:o().shapeBox,children:(0,r.jsx)("div",{className:o().boxWrapper,children:(0,r.jsxs)("svg",{width:"1184",height:"600",viewBox:"0 0 1184 600",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{x:"74.8376",y:"122.275",width:"187.302",height:"218.811",transform:"rotate(20 74.8376 122.275)",fill:"#3F5CFB"}),(0,r.jsx)("ellipse",{cx:"400.185",cy:"351.792",rx:"247.949",ry:"247.542",fill:"#219AFB"}),(0,r.jsx)("rect",{x:"619.094",y:"261.808",width:"277.901",height:"277.901",transform:"rotate(-70 619.094 261.808)",fill:"#02D9FC"}),(0,r.jsx)("rect",{x:"558.668",y:"328.095",width:"277.901",height:"277.901",transform:"rotate(-80 558.668 328.095)",fill:"#3C55FF"}),(0,r.jsx)("circle",{cx:"161.208",cy:"188.26",r:"73.4061",fill:"#5BEBC1"}),(0,r.jsx)("path",{d:"M103.298 114.854H219.117L161.208 60.2068L103.298 114.854Z",fill:"#1C345C"}),(0,r.jsx)("path",{d:"M103.298 60.2068H219.117L161.208 5.56006L103.298 60.2068Z",fill:"#1C345C"}),(0,r.jsx)("ellipse",{cx:"1036.78",cy:"217.622",rx:"147.22",ry:"146.812",fill:"#219AFB"})]})})})})})}},2653:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return k},default:function(){return C}});var r=n(5893),a=n(7757),o=n.n(a),i=n(2137),s=n(5284),c=n(9183),l=n(9008),u=n(7081),d=n(7556),m=n.n(d),g=n(8116),f=n.n(g);function p(e){var t=e.currentPost,n=function(){var e=window.location.href;return console.log(e),e};return(0,r.jsx)("section",{className:m().articlePage,children:(0,r.jsxs)("div",{className:" container ".concat(m().mainArticle),children:[(0,r.jsx)("div",{className:m().mainArticleImage,children:(0,r.jsx)("img",{src:"".concat(t[0].feature_image)})}),(0,r.jsxs)("div",{className:"".concat(m().mainArticleData),children:[(0,r.jsxs)("div",{className:m().topBar,children:[(0,r.jsx)("p",{className:m().articleTag,children:t[0].tags.length>0?t[0].tags[0].name:"Voyage"}),(0,r.jsxs)("div",{className:m().topRight,children:[(0,r.jsxs)("p",{children:["Published on ",f()("".concat(t[0].published_at),"d mmmm, yy")]}),(0,r.jsx)("svg",{width:"3",height:"4",viewBox:"0 0 3 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("circle",{cx:"1.5",cy:"2",r:"1.5",fill:"#CBCBCB"})}),(0,r.jsxs)("p",{children:[t[0].reading_time," min read"]})]})]}),(0,r.jsxs)("div",{className:m().bodyContent,children:[(0,r.jsx)("div",{className:" aos-init ".concat(m().bodyTitle),"data-aos":"fade-up","data-aos-duration":"1000",children:t[0].title}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:t[0].html},className:"".concat(m().bodyHTML),"data-aos":"fade-up","data-aos-duration":"1500"})]})]}),(0,r.jsxs)("div",{className:m().socialIcons,children:[(0,r.jsx)("div",{className:"".concat(m().socialIcon_fb," ").concat(m().socialIcon),children:(0,r.jsx)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(n()),target:"_blank",children:(0,r.jsx)("img",{src:"/images/voyage-blog-fb-icon.png"})})}),(0,r.jsx)("div",{className:"".concat(m().socialIcon_tw," ").concat(m().socialIcon),children:(0,r.jsx)("a",{href:"http://twitter.com/share?url=".concat(n()),target:"_blank",children:(0,r.jsx)("img",{src:"/images/voyage-blog-tw-icon.png"})})}),(0,r.jsx)("div",{className:"".concat(m().socialIcon_li," ").concat(m().socialIcon),children:(0,r.jsx)("a",{href:"http://www.linkedin.com/shareArticle?mini=true&url=".concat(n()),target:"_blank",children:(0,r.jsx)("img",{src:"/images/voyage-blog-li-icon.png"})})})]})]})})}var h=n(6156),y=n(8558),b=n.n(y),_=n(7463),x=n(6066);n(6591),n(6694);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){var t=e.relatedPosts;return(0,r.jsx)("section",{id:b().blogPageRelatedArticles,className:b().blogPageRelatedArticles,children:(0,r.jsxs)("div",{className:"container blogPageRelatedItemsContainer ".concat(b().sectionContainer),children:[(0,r.jsx)("h1",{className:"aos-init ".concat(b().relatedArticlesHeading),"data-aos":"fade-up","data-aos-duration":"500",children:"Related Articles"}),(0,r.jsx)(x.Z,v(v({},{dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:2500,slidesToShow:3,slidesToScroll:1,cssEase:"cubic-bezier(.51,.11,.44,.96)",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{className:b().relatedPostsContainer,children:t.map((function(e){return(0,r.jsx)("div",{className:"relatedArticleItem",children:(0,r.jsx)(_.Z,{post:e})},e.id)}))}))]})})}var M=n(4809),P=n.n(M),T=n(7294),A=n(8361);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(){var e=(0,T.useRef)(),t=(0,T.useRef)(),n=(0,T.useState)(""),a=n[0],o=n[1],i=(0,T.useState)(!1),s=i[0],c=i[1],l=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,u=function(){var n=e.current.value;if(0==n.length||!l.test(n))return t.current.textContent="Invalid Email Address",!1;t.current.textContent="",o("");try{var r=(0,A.PB)()||{};(0,A.jt)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({email:n},r))}catch(a){console.error(a)}c(!0)};return(0,T.useEffect)((function(){t.current.textContent=""}),[a]),(0,r.jsx)("section",{className:P().signupBlock,children:(0,r.jsx)("div",{className:"container ".concat(P().signupWrapper),children:(0,r.jsxs)("div",{className:P().signupBox,"data-scroll":!0,children:[(0,r.jsx)("h3",{children:"Subscribe to the SMS Marketing Resources news letter"}),(0,r.jsx)("p",{className:P().description,children:"Sign up now to get access to the most powerful full-stack text message commerce platform in the world. We will get back to you in less than 1 business day. Your first 30 days of text messages are on us!"}),(0,r.jsxs)("div",{className:P().inputBox,children:[s&&(0,r.jsx)("p",{className:P().thankYou,children:(0,r.jsx)("span",{children:"Great! Thanks so much for filling out our form. One of our amazing team members will reach out to you shortly!"})}),(0,r.jsx)("span",{id:"smailSignUpError",ref:t,className:P().emailError}),(0,r.jsxs)("div",{id:P().inputWrapper,children:[(0,r.jsx)("input",{ref:e,value:a,onChange:function(e){return o(e.target.value)},type:"text",name:"email",id:"emailSignUp",autoComplete:"off",placeholder:"ENTER YOUR EMAIL"}),(0,r.jsx)("button",{onClick:function(){return u()},id:"emailSubmit",children:"Subscribe"})]})]})]})})})}var D=n(1563),I=n(8767),B=function(){var e=(0,i.Z)(o().mark((function e(t){var n,r,a,i,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey[1].tags,r=n.map((function(e){return"filter=tag:".concat(e)})),a=r.join("&"),i="".concat("https://sms-marketing-resources.ghost.io/","/ghost/api/v3/content/posts/?key=").concat("c7bafa2c2c579763b605f57fb6","&include=authors,tags&").concat(a),e.next=6,fetch(i);case 6:return s=e.sent,c=s.json(),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=!0;function C(e){var t=e.posts,n=e.currentPost,a=(0,T.useState)({posts:t}),o=a[0],i=(a[1],(0,T.useState)("close")),d=i[0],m=i[1],g=n[0].tags.map((function(e){return e.slug})),f=((0,I.useQueryClient)(),(0,I.useQuery)(["filtered posts",{tags:g}],B,{initialData:o})),h=f.isLoading,y=f.data;f.status;return h?(0,r.jsx)("div",{className:"App",children:(0,r.jsx)("h2",{style:{width:"100vw",height:"100vh",opacity:".5",display:"flex",alignItems:"center",justifyContent:"center"},children:"Loading Blog..."})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("meta",{name:"description",content:"SMS marketing and text messaging for your ecommerce business. Get 40%+ CTR and 90%+ open rates. Get a demo today!"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{property:"og:title",content:"SMS Marketing for Ecommerce | Voyage Mobile"}),(0,r.jsx)("title",{children:"Voyage SMS: Text Marketing for eCommerce"})]}),(0,r.jsxs)("div",{className:"main",id:"main-target","data-scroll-container":!0,children:[(0,r.jsx)(u.Z,{formState:d,setFormState:m}),(0,r.jsx)(s.Z,{setFormState:m}),(0,r.jsx)(p,{currentPost:n}),(0,r.jsx)(w,{relatedPosts:y.posts.filter((function(e){return e.id!=n[0].id}))}),(0,r.jsx)(S,{}),(0,r.jsx)(D.Z,{}),(0,r.jsx)(c.Z,{setFormState:m})]})]})}},4163:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(2653)}])},4809:function(e){e.exports={signupBlock:"blogArticlePageSignupBlock_signupBlock__olo8y",signupWrapper:"blogArticlePageSignupBlock_signupWrapper__2dsmd",signupBox:"blogArticlePageSignupBlock_signupBox__293Z1",description:"blogArticlePageSignupBlock_description__2IkJa",inputBox:"blogArticlePageSignupBlock_inputBox__CWyGt",emailError:"blogArticlePageSignupBlock_emailError__1mAJb",inputWrapper:"blogArticlePageSignupBlock_inputWrapper__3cByA",thankYou:"blogArticlePageSignupBlock_thankYou__2KybE",extraInfo:"blogArticlePageSignupBlock_extraInfo__1kl6a"}},4818:function(e){e.exports={blogItemLink:"blogItem_blogItemLink__2Sv8u",blogItemImage:"blogItem_blogItemImage__1mAD9",blogItemDetails:"blogItem_blogItemDetails__eUaGT",blogItemTagAndTime:"blogItem_blogItemTagAndTime__1zG2y",blogItemTitle:"blogItem_blogItemTitle__2QcJ5",blogItemExcerpt:"blogItem_blogItemExcerpt__3F_oH"}},530:function(e){e.exports={blogPageBottomBlock:"blogPageBottomBlock_blogPageBottomBlock__26I54",shapeBox:"blogPageBottomBlock_shapeBox__wIZtp",boxWrapper:"blogPageBottomBlock_boxWrapper__3i9Ql"}},7556:function(e){e.exports={articlePage:"blogPageMainArticle_articlePage__1AQ4O",mainArticle:"blogPageMainArticle_mainArticle__ZUmM1",socialIcons:"blogPageMainArticle_socialIcons__3PBiB",socialIcon:"blogPageMainArticle_socialIcon__2t1Cu",socialIcon_fb:"blogPageMainArticle_socialIcon_fb__3LHEN",socialIcon_tw:"blogPageMainArticle_socialIcon_tw__2bpmW",socialIcon_li:"blogPageMainArticle_socialIcon_li__3cOBo",mainArticleImage:"blogPageMainArticle_mainArticleImage__6ahsc",mainArticleData:"blogPageMainArticle_mainArticleData__StTe4",topBar:"blogPageMainArticle_topBar__2oHwB",topRight:"blogPageMainArticle_topRight__354Rp",articleTag:"blogPageMainArticle_articleTag__2vIA2",bodyContent:"blogPageMainArticle_bodyContent__3x9x8",bodyTitle:"blogPageMainArticle_bodyTitle__2AR-m",bodyHTML:"blogPageMainArticle_bodyHTML__3UTuT"}},8558:function(e){e.exports={blogPageRelatedArticles:"blogPageRelatedArticles_blogPageRelatedArticles__wGeXw",sectionContainer:"blogPageRelatedArticles_sectionContainer__oQs54",relatedPostsContainer:"blogPageRelatedArticles_relatedPostsContainer__18KL9",relatedArticlesHeading:"blogPageRelatedArticles_relatedArticlesHeading__G16qX"}}},function(e){e.O(0,[248,769,174,774,888,179],(function(){return t=4163,e(e.s=t);var t}));var t=e.O();_N_E=t}]);