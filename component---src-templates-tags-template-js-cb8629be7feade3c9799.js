(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[458],{7383:function(e,t,a){"use strict";var n=a(7294),i=a(1554),r=a(5444),o=a(1621);t.Z=function(e){var t=e.posts.map((function(e){var t=e.frontmatter,a=e.fields,i=e.excerpt,r=e.timeToRead,o=t.title,l=t.tags,m=t.date,d=t.description,p=a.slug;return n.createElement(s,{key:p,tags:l,title:o,date:m,slug:p,timeToRead:r,description:d,excerpt:i})}));return n.createElement(l,null,t)};var s=function(e){var t=e.title,a=e.date,i=e.timeToRead,s=e.tags,l=e.excerpt,g=e.description,u=e.slug;return n.createElement(m,null,n.createElement(o.Z,{tags:s}),n.createElement(d,null,n.createElement(r.Link,{to:u},t)),n.createElement(p,{dangerouslySetInnerHTML:{__html:g||l}}),n.createElement(c,null,n.createElement("span",null,a),n.createElement("span",null,i," mins")))},l=i.ZP.ul.withConfig({displayName:"post-list__StyledPostList",componentId:"rmizj4-0"})(["padding:0;list-style:none;display:grid;justify-items:center;grid-gap:var(--size-600);grid-template-columns:repeat(auto-fit,minmax(35ch,1fr));@media screen and (max-width:500px){&{display:block;}}"]),m=i.ZP.li.withConfig({displayName:"post-list__StyledPostListItem",componentId:"rmizj4-1"})(["position:relative;display:flex;flex-direction:column;padding:1.5rem;border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);backdrop-filter:blur(10px);border-radius:8px;&:hover{background-color:rgba(255,255,255,0.5);}@media screen and (max-width:500px){&{margin-top:var(--size-600);}}"]),d=i.ZP.h2.withConfig({displayName:"post-list__PostListTitle",componentId:"rmizj4-2"})(['line-height:1.2;margin-top:1rem;margin-bottom:1rem;text-transform:capitalize;font-size:var(--size-600);font-weight:700;& a{text-decoration:none;color:inherit;}& a::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;}']),p=i.ZP.p.withConfig({displayName:"post-list__PostListExcerpt",componentId:"rmizj4-3"})(["margin-top:auto;font-size:var(--size-400);"]),c=i.ZP.div.withConfig({displayName:"post-list__PostListMeta",componentId:"rmizj4-4"})(["margin-top:2rem;font-size:var(--size-300);display:flex;justify-content:space-between;"])},1444:function(e,t,a){"use strict";var n=a(5444),i=(0,a(1554).ZP)(n.Link).withConfig({displayName:"styled-link__StyledLink",componentId:"sc-1e3ktw4-0"})(["padding:0.5rem;padding-left:1.5rem;padding-right:1.5rem;color:inherit;background-color:rgba(255,255,255,0.4);text-decoration:none;border-radius:0px;border:1px solid rgba(255,255,255,0.8);text-transform:uppercase;border-radius:4px;"]);t.Z=i},1621:function(e,t,a){"use strict";var n=a(7294),i=a(1554),r=a(5444);t.Z=function(e){var t=e.tags;return n.createElement("div",null,t&&t.map((function(e){return n.createElement(o,{key:e},n.createElement(r.Link,{to:"/tags/"+(t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"))},e));var t})))};var o=i.ZP.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;background-color:rgba(255,255,255,0.7);text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}"])},4835:function(e,t,a){"use strict";a.r(t);var n=a(7294),i=a(5444),r=a(1397),o=a(7383),s=a(1444),l=a(1554),m=(0,l.ZP)(i.Link).withConfig({displayName:"tags-template___StyledLink",componentId:"sc-1wm19nq-0"})(["margin-top:var(--size-400);display:inline-block;color:inherit;text-transform:uppercase;"]),d=(0,l.ZP)(s.Z).withConfig({displayName:"tags-template___StyledStyledLink",componentId:"sc-1wm19nq-1"})(["margin-top:var(--size-400);display:inline-block;"]);t.default=function(e){var t=e.pageContext,a=e.data,i=t.tag,s=a.allMarkdownRemark.totalCount,l=a.allMarkdownRemark.nodes,g="Posts tagged "+i;return n.createElement(r.Z,{title:g},n.createElement(p,null,n.createElement(c,null,s,' posts tagged "',i,'"'),n.createElement(m,{to:"/tags"},"view all tags"),n.createElement(o.Z,{posts:l}),n.createElement(d,{to:"/tags"},"View All tags")))};var p=l.ZP.div.withConfig({displayName:"tags-template__TagsTemplateWrapper",componentId:"sc-1wm19nq-2"})(["padding-top:var(--size-900);"]),c=l.ZP.h1.withConfig({displayName:"tags-template__Title",componentId:"sc-1wm19nq-3"})(["font-size:var(--size-700);"])}}]);
//# sourceMappingURL=component---src-templates-tags-template-js-cb8629be7feade3c9799.js.map