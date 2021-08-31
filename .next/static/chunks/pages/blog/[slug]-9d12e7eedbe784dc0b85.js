(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{2137:function(e,t,n){"use strict";function r(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){r(o,i,a,s,c,"next",e)}function c(e){r(o,i,a,s,c,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return i}})},8116:function(e,t,n){"use strict";var r;function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(a){var o=arguments,s=function(){var e=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g;return function(r,i,a,g){if(1!==o.length||"string"!==m(r)||/\d/.test(r)||(i=r,r=void 0),(r=r||0===r?r:new Date)instanceof Date||(r=new Date(r)),isNaN(r))throw TypeError("Invalid date");var f=(i=String(s.masks[i]||i||s.masks.default)).slice(0,4);"UTC:"!==f&&"GMT:"!==f||(i=i.slice(4),a=!0,"GMT:"===f&&(g=!0));var p=function(){return a?"getUTC":"get"},h=function(){return r[p()+"Date"]()},y=function(){return r[p()+"Day"]()},b=function(){return r[p()+"Month"]()},_=function(){return r[p()+"FullYear"]()},x=function(){return r[p()+"Hours"]()},j=function(){return r[p()+"Minutes"]()},v=function(){return r[p()+"Seconds"]()},M=function(){return r[p()+"Milliseconds"]()},P=function(){return a?0:r.getTimezoneOffset()},T=function(){return u(r)},w={d:function(){return h()},dd:function(){return c(h())},ddd:function(){return s.i18n.dayNames[y()]},DDD:function(){return l({y:_(),m:b(),d:h(),_:p(),dayName:s.i18n.dayNames[y()],short:!0})},dddd:function(){return s.i18n.dayNames[y()+7]},DDDD:function(){return l({y:_(),m:b(),d:h(),_:p(),dayName:s.i18n.dayNames[y()+7]})},m:function(){return b()+1},mm:function(){return c(b()+1)},mmm:function(){return s.i18n.monthNames[b()]},mmmm:function(){return s.i18n.monthNames[b()+12]},yy:function(){return String(_()).slice(2)},yyyy:function(){return c(_(),4)},h:function(){return x()%12||12},hh:function(){return c(x()%12||12)},H:function(){return x()},HH:function(){return c(x())},M:function(){return j()},MM:function(){return c(j())},s:function(){return v()},ss:function(){return c(v())},l:function(){return c(M(),3)},L:function(){return c(Math.floor(M()/10))},t:function(){return x()<12?s.i18n.timeNames[0]:s.i18n.timeNames[1]},tt:function(){return x()<12?s.i18n.timeNames[2]:s.i18n.timeNames[3]},T:function(){return x()<12?s.i18n.timeNames[4]:s.i18n.timeNames[5]},TT:function(){return x()<12?s.i18n.timeNames[6]:s.i18n.timeNames[7]},Z:function(){return g?"GMT":a?"UTC":(String(r).match(t)||[""]).pop().replace(n,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(P()>0?"-":"+")+c(100*Math.floor(Math.abs(P())/60)+Math.abs(P())%60,4)},p:function(){return(P()>0?"-":"+")+c(Math.floor(Math.abs(P())/60),2)+":"+c(Math.floor(Math.abs(P())%60),2)},S:function(){return["th","st","nd","rd"][h()%10>3?0:(h()%100-h()%10!=10)*h()%10]},W:function(){return T()},WW:function(){return c(T())},N:function(){return d(r)}};return i.replace(e,(function(e){return e in w?w[e]():e.slice(1,e.length-1)}))}}();s.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var c=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e},l=function(e){var t=e.y,n=e.m,r=e.d,i=e._,a=e.dayName,o=e.short,s=void 0!==o&&o,c=new Date,l=new Date;l.setDate(l[i+"Date"]()-1);var u=new Date;u.setDate(u[i+"Date"]()+1);return c[i+"FullYear"]()===t&&c[i+"Month"]()===n&&c[i+"Date"]()===r?s?"Tdy":"Today":l[i+"FullYear"]()===t&&l[i+"Month"]()===n&&l[i+"Date"]()===r?s?"Ysd":"Yesterday":u[i+"FullYear"]()===t&&u[i+"Month"]()===n&&u[i+"Date"]()===r?s?"Tmw":"Tomorrow":a},u=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var i=(t-n)/6048e5;return 1+Math.floor(i)},d=function(e){var t=e.getDay();return 0===t&&(t=7),t},m=function(e){return null===e?"null":void 0===e?"undefined":"object"!==i(e)?i(e):Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()};void 0===(r=function(){return s}.call(t,n,t,e))||(e.exports=r)}(void 0)},7463:function(e,t,n){"use strict";var r=n(5893),i=n(1664),a=n(4818),o=n.n(a);t.Z=function(e){var t=e.post;return(0,r.jsx)(i.default,{href:"/blog/[slug]",as:"/blog/".concat(t.slug),children:(0,r.jsxs)("a",{className:"aos-init ".concat(o().blogItemLink),"data-aos":"fade-up","data-aos-duration":"1000",children:[(0,r.jsx)("div",{className:o().blogItemImage,children:(0,r.jsx)("img",{src:"".concat(t.feature_image)})}),(0,r.jsxs)("div",{className:o().blogItemDetails,children:[(0,r.jsxs)("div",{className:o().blogItemTagAndTime,children:[(0,r.jsx)("p",{children:t.tags.length>0?t.tags[0].name:"Voyage"}),(0,r.jsx)("svg",{width:"3",height:"4",viewBox:"0 0 3 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("circle",{cx:"1.5",cy:"2",r:"1.5",fill:"#CBCBCB"})}),(0,r.jsxs)("p",{children:[t.reading_time," min read"]})]}),(0,r.jsx)("h2",{className:o().blogItemTitle,children:t.title}),(0,r.jsxs)("p",{className:o().blogItemExcerpt,children:[" ",t.excerpt," "]})]})]})})}},1563:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(530),a=n.n(i),o=(0,n(2082).Wm)({breakpoints:{sm:0,md:769,lg:1024,xl:1192}}),s=o.MediaContextProvider;o.Media;function c(){return(0,r.jsx)(s,{children:(0,r.jsx)("section",{id:a().blogPageBottomBlock,className:a().blogPageBottomBlock,children:(0,r.jsx)("div",{className:a().shapeBox,children:(0,r.jsx)("div",{className:a().boxWrapper,children:(0,r.jsxs)("svg",{width:"1184",height:"600",viewBox:"0 0 1184 600",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{x:"74.8376",y:"122.275",width:"187.302",height:"218.811",transform:"rotate(20 74.8376 122.275)",fill:"#3F5CFB"}),(0,r.jsx)("ellipse",{cx:"400.185",cy:"351.792",rx:"247.949",ry:"247.542",fill:"#219AFB"}),(0,r.jsx)("rect",{x:"619.094",y:"261.808",width:"277.901",height:"277.901",transform:"rotate(-70 619.094 261.808)",fill:"#02D9FC"}),(0,r.jsx)("rect",{x:"558.668",y:"328.095",width:"277.901",height:"277.901",transform:"rotate(-80 558.668 328.095)",fill:"#3C55FF"}),(0,r.jsx)("circle",{cx:"161.208",cy:"188.26",r:"73.4061",fill:"#5BEBC1"}),(0,r.jsx)("path",{d:"M103.298 114.854H219.117L161.208 60.2068L103.298 114.854Z",fill:"#1C345C"}),(0,r.jsx)("path",{d:"M103.298 60.2068H219.117L161.208 5.56006L103.298 60.2068Z",fill:"#1C345C"}),(0,r.jsx)("ellipse",{cx:"1036.78",cy:"217.622",rx:"147.22",ry:"146.812",fill:"#219AFB"})]})})})})})}},2653:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return k},default:function(){return C}});var r=n(5893),i=n(7757),a=n.n(i),o=n(2137),s=n(5284),c=n(9183),l=n(9008),u=n(7081),d=n(7556),m=n.n(d),g=n(8116),f=n.n(g);function p(e){var t=e.currentPost;return(0,r.jsx)("section",{className:m().articlePage,children:(0,r.jsxs)("div",{className:" container ".concat(m().mainArticle),children:[(0,r.jsx)("div",{className:m().mainArticleImage,children:(0,r.jsx)("img",{src:"".concat(t[0].feature_image)})}),(0,r.jsxs)("div",{className:"".concat(m().mainArticleData),children:[(0,r.jsxs)("div",{className:m().topBar,children:[(0,r.jsx)("p",{className:m().articleTag,children:t[0].tags.length>0?t[0].tags[0].name:"Voyage"}),(0,r.jsxs)("div",{className:m().topRight,children:[(0,r.jsxs)("p",{children:["Published on ",f()("".concat(t[0].published_at),"d mmmm, yy")]}),(0,r.jsx)("svg",{width:"3",height:"4",viewBox:"0 0 3 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("circle",{cx:"1.5",cy:"2",r:"1.5",fill:"#CBCBCB"})}),(0,r.jsxs)("p",{children:[t[0].reading_time," min read"]})]})]}),(0,r.jsxs)("div",{className:m().bodyContent,children:[(0,r.jsx)("div",{className:" aos-init ".concat(m().bodyTitle),"data-aos":"fade-up","data-aos-duration":"1000",children:t[0].title}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:t[0].html},className:"".concat(m().bodyHTML),"data-aos":"fade-up","data-aos-duration":"1500"})]})]}),(0,r.jsxs)("div",{className:m().socialIcons,children:[(0,r.jsx)("div",{className:"".concat(m().socialIcon_fb," ").concat(m().socialIcon),children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/images/voyage-blog-fb-icon.png"})})}),(0,r.jsx)("div",{className:"".concat(m().socialIcon_tw," ").concat(m().socialIcon),children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/images/voyage-blog-tw-icon.png"})})}),(0,r.jsx)("div",{className:"".concat(m().socialIcon_li," ").concat(m().socialIcon),children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/images/voyage-blog-li-icon.png"})})})]})]})})}var h=n(6156),y=n(8558),b=n.n(y),_=n(7463),x=n(6066);n(6591),n(6694);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e){var t=e.relatedPosts;return(0,r.jsx)("section",{id:b().blogPageRelatedArticles,className:b().blogPageRelatedArticles,children:(0,r.jsxs)("div",{className:"container blogPageRelatedItemsContainer ".concat(b().sectionContainer),children:[(0,r.jsx)("h1",{className:"aos-init ".concat(b().relatedArticlesHeading),"data-aos":"fade-up","data-aos-duration":"500",children:"Related Articles"}),(0,r.jsx)(x.Z,v(v({},{dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:2500,slidesToShow:3,slidesToScroll:1,cssEase:"cubic-bezier(.51,.11,.44,.96)",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{className:b().relatedPostsContainer,children:t.map((function(e){return(0,r.jsx)("div",{className:"relatedArticleItem",children:(0,r.jsx)(_.Z,{post:e})},e.id)}))}))]})})}var P=n(4809),T=n.n(P),w=n(7294),A=n(8361);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(){var e=(0,w.useRef)(),t=(0,w.useRef)(),n=(0,w.useState)(""),i=n[0],a=n[1],o=(0,w.useState)(!1),s=o[0],c=o[1],l=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,u=function(){var n=e.current.value;if(0==n.length||!l.test(n))return t.current.textContent="Invalid Email Address",!1;t.current.textContent="",a("");try{var r=(0,A.PB)()||{};(0,A.jt)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({email:n},r))}catch(i){console.error(i)}c(!0)};return(0,w.useEffect)((function(){t.current.textContent=""}),[i]),(0,r.jsx)("section",{className:T().signupBlock,children:(0,r.jsx)("div",{className:"container ".concat(T().signupWrapper),children:(0,r.jsxs)("div",{className:T().signupBox,"data-scroll":!0,children:[(0,r.jsx)("h3",{children:"Subscribe to the SMS Marketing Resources news letter"}),(0,r.jsx)("p",{className:T().description,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin purus sed odio dignissim tincidunt."}),(0,r.jsxs)("div",{className:T().inputBox,children:[s&&(0,r.jsx)("p",{className:T().thankYou,children:(0,r.jsx)("span",{children:"Great! Thanks so much for filling out our form. One of our amazing team members will reach out to you shortly!"})}),(0,r.jsx)("span",{id:"smailSignUpError",ref:t,className:T().emailError}),(0,r.jsxs)("div",{id:T().inputWrapper,children:[(0,r.jsx)("input",{ref:e,value:i,onChange:function(e){return a(e.target.value)},type:"text",name:"email",id:"emailSignUp",autoComplete:"off",placeholder:"ENTER YOUR EMAIL"}),(0,r.jsx)("button",{onClick:function(){return u()},id:"emailSubmit",children:"Subscribe"})]})]})]})})})}var D=n(1563),I=n(8767),B=function(){var e=(0,o.Z)(a().mark((function e(t){var n,r,i,o,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey[1].tags,console.log("current tag names : ",n),r=n.map((function(e){return"filter=tag:".concat(e)})),i=r.join("&"),o="".concat("https://sms-marketing-resources.ghost.io/","/ghost/api/v3/content/posts/?key=").concat("c7bafa2c2c579763b605f57fb6","&include=authors,tags&").concat(i),e.next=7,fetch(o);case 7:return s=e.sent,c=s.json(),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=!0;function C(e){var t=e.posts,n=e.currentPost,i=(0,w.useState)({posts:t}),a=i[0],o=(i[1],(0,w.useState)("close")),d=o[0],m=o[1],g=n[0].tags.map((function(e){return e.slug})),f=((0,I.useQueryClient)(),(0,I.useQuery)(["filtered posts",{tags:g}],B,{initialData:a})),h=f.isLoading,y=f.data;f.status;return h?(0,r.jsx)("div",{className:"App",children:(0,r.jsx)("h2",{style:{width:"100vw",height:"100vh",opacity:".5",display:"flex",alignItems:"center",justifyContent:"center"},children:"Loading Blog..."})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("meta",{name:"description",content:"SMS marketing and text messaging for your ecommerce business. Get 40%+ CTR and 90%+ open rates. Get a demo today!"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{property:"og:title",content:"SMS Marketing for Ecommerce | Voyage Mobile"}),(0,r.jsx)("title",{children:"Voyage SMS: Text Marketing for eCommerce"})]}),(0,r.jsxs)("div",{className:"main",id:"main-target","data-scroll-container":!0,children:[(0,r.jsx)(u.Z,{formState:d,setFormState:m}),(0,r.jsx)(s.Z,{setFormState:m}),(0,r.jsx)(p,{currentPost:n}),(0,r.jsx)(M,{relatedPosts:y.posts.filter((function(e){return e.id!=n[0].id}))}),(0,r.jsx)(S,{}),(0,r.jsx)(D.Z,{}),(0,r.jsx)(c.Z,{setFormState:m})]})]})}},4163:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(2653)}])},4809:function(e){e.exports={signupBlock:"blogArticlePageSignupBlock_signupBlock__olo8y",signupWrapper:"blogArticlePageSignupBlock_signupWrapper__2dsmd",signupBox:"blogArticlePageSignupBlock_signupBox__293Z1",description:"blogArticlePageSignupBlock_description__2IkJa",inputBox:"blogArticlePageSignupBlock_inputBox__CWyGt",emailError:"blogArticlePageSignupBlock_emailError__1mAJb",inputWrapper:"blogArticlePageSignupBlock_inputWrapper__3cByA",thankYou:"blogArticlePageSignupBlock_thankYou__2KybE",extraInfo:"blogArticlePageSignupBlock_extraInfo__1kl6a"}},4818:function(e){e.exports={blogItemLink:"blogItem_blogItemLink__2Sv8u",blogItemImage:"blogItem_blogItemImage__1mAD9",blogItemDetails:"blogItem_blogItemDetails__eUaGT",blogItemTagAndTime:"blogItem_blogItemTagAndTime__1zG2y",blogItemTitle:"blogItem_blogItemTitle__2QcJ5",blogItemExcerpt:"blogItem_blogItemExcerpt__3F_oH"}},530:function(e){e.exports={blogPageBottomBlock:"blogPageBottomBlock_blogPageBottomBlock__26I54",shapeBox:"blogPageBottomBlock_shapeBox__wIZtp",boxWrapper:"blogPageBottomBlock_boxWrapper__3i9Ql"}},7556:function(e){e.exports={articlePage:"blogPageMainArticle_articlePage__1AQ4O",mainArticle:"blogPageMainArticle_mainArticle__ZUmM1",socialIcons:"blogPageMainArticle_socialIcons__3PBiB",socialIcon:"blogPageMainArticle_socialIcon__2t1Cu",socialIcon_fb:"blogPageMainArticle_socialIcon_fb__3LHEN",socialIcon_tw:"blogPageMainArticle_socialIcon_tw__2bpmW",socialIcon_li:"blogPageMainArticle_socialIcon_li__3cOBo",mainArticleImage:"blogPageMainArticle_mainArticleImage__6ahsc",mainArticleData:"blogPageMainArticle_mainArticleData__StTe4",topBar:"blogPageMainArticle_topBar__2oHwB",topRight:"blogPageMainArticle_topRight__354Rp",articleTag:"blogPageMainArticle_articleTag__2vIA2",bodyContent:"blogPageMainArticle_bodyContent__3x9x8",bodyTitle:"blogPageMainArticle_bodyTitle__2AR-m",bodyHTML:"blogPageMainArticle_bodyHTML__3UTuT"}},8558:function(e){e.exports={blogPageRelatedArticles:"blogPageRelatedArticles_blogPageRelatedArticles__wGeXw",sectionContainer:"blogPageRelatedArticles_sectionContainer__oQs54",relatedPostsContainer:"blogPageRelatedArticles_relatedPostsContainer__18KL9",relatedArticlesHeading:"blogPageRelatedArticles_relatedArticlesHeading__G16qX"}}},function(e){e.O(0,[248,769,174,774,888,179],(function(){return t=4163,e(e.s=t);var t}));var t=e.O();_N_E=t}]);