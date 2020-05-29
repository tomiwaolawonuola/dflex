(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"35SZ":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("mXGw");var a=t("/FXl"),l=t("Bl7J");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={},s={_frontmatter:i},b=l.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(a.b)(b,r({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"@dflex/store"),Object(a.b)("p",null,"The place where you traverse through the DOM tree using element-id."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install @dflex/store\n")),Object(a.b)("p",null,"DFlex store works on connecting all registered elements and organizes the\nrelations between them using the DOM relations generator algorithm. Allowing\neach element to be reached recursively using its id."),Object(a.b)("p",null,"Why? To increase application performance if it relies heavily on the DOM nodes. To\nbe clear, this is not a case against HTML DOM API. Instead, this a way to\nenhance dealing with nodes more freely when you rely on existing store instead\nof letting the browser reads the nodes first, then you store them to do whatever\nyou want to do."),Object(a.b)("p",null,"Giving this fact, the Dflex store is built on what you already have and you can\neasily access: ",Object(a.b)("inlineCode",{parentName:"p"},"id"),", which is why ids are used as keys."),Object(a.b)("h2",null,"Registering elements in the store"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-ts"}),"store.register(elmInstance: Object<elmInstance>)\n")),Object(a.b)("p",null,"Where ",Object(a.b)("inlineCode",{parentName:"p"},"elmInstance")," should include:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"id: string")," - element id."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"depth: number")," - element depth in DOM tree."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"rest: any")," - another data you want to store it for each element.")),Object(a.b)("p",null,"Let's create new store and register some elements in it:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'import Store from "dflex/store";\n\nconst store = new Store();\n\nconst elm0D0 = {\n  id: "id-0",\n  depth: 0,\n  moreInfo: "I am the first child",\n};\nstore.register(elm0D0);\n\nconst elm1D0 = {\n  id: "id-1",\n  depth: 0,\n  moreInfo: "I am the second child",\n};\nstore.register(elm1D0);\n\nconst elm0D1 = {\n  id: "p-id-0",\n  depth: 1,\n  moreInfo: "I am the parent",\n};\nstore.register(elm0D1);\n')),Object(a.b)("h2",null,"Getting element in the store"),Object(a.b)("h3",null,"Element Instance by ID"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-ts"}),"store.getElmById(id: string) :  Object<elmInstanceMeta>\n")),Object(a.b)("p",null,"It returns ",Object(a.b)("inlineCode",{parentName:"p"},"Object<elmInstanceMeta>")," which contains element metadata including\ngenerated keys and indexes with registered data."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"id: string")," - element id.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"depth: number")," - element depth in DOM tree.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"order: Object <elementOrder>")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"self: number")," - Element self index among its siblings."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"parent: number")," - Parent index among its siblings."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"keys: Object <relationKey>")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"sK: string")," - Siblings Key, connects nodes in the same level."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pK: string")," - Parent key, connects nodes in the higher level."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"chK: string")," - Children Key, connects nodes in the lower level."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"rest: any")," - data already entered when element is registered."))),Object(a.b)("p",null,"Let's apply it on element with ",Object(a.b)("inlineCode",{parentName:"p"},"id= id-0")," which we already registered in the\nstore:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'const elemInstance = store.getElmById("id-0");\n\n// elemInstance = {\n//   depth: 0,\n//   id: "id-0",\n//   keys: {\n//     chK: null,\n//     pK: "1-0",\n//     sK: "0-0",\n//   },\n//   moreInfo: "I am the first child",\n//   order: {\n//     parent: 0,\n//     self: 0,\n//   },\n// };\n')),Object(a.b)("h3",null,"Element Tree by ID"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-ts"}),"store.getElmTreeById(id: string) : Object<elmInstanceConnection>\n")),Object(a.b)("p",null,"It returns ",Object(a.b)("inlineCode",{parentName:"p"},"Object<elmInstanceConnection>")," which contains element connections in DOM tree with\nregistered data. It includes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"element: Object<elmInstanceMeta>"),"- for targeted element.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"parent: Object<elmInstanceMeta>"),"- for element's parent.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"branches: Object<treeBranches>"),":"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"siblings: string<id>|Array<ids>")," - all element's siblings.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"parents: string<id>|Array<ids>")," - all element's parents."))))),Object(a.b)("p",null,"Going back to our first element with ",Object(a.b)("inlineCode",{parentName:"p"},"id= id-0"),", we can get element instance, its parent instance,\nand its connection branches as following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'const elmInstanceConnection = store.getElmTreeById("id-0");\n\n// elmInstanceConnection = {\n//   element: {\n//     id: "id-0",\n//     depth: 0,\n//     moreInfo: "I am the first child",\n//     order: { self: 0, parent: 0 },\n//     keys: { sK: "0-0", pK: "1-0", chK: null },\n//   },\n//   parent: {\n//     depth: 1,\n//     id: "p-id-0",\n//     keys: {\n//       chK: "0-0",\n//       pK: "2-0",\n//       sK: "1-0",\n//     },\n//     moreInfo: "I am the parent",\n//     order: {\n//       parent: 0,\n//       self: 0,\n//     },\n//   },\n//   branches: { siblings: ["id-0", "id-1"], parents: "p-id-0" },\n// };\n')),Object(a.b)("p",null,"Why this is matter? Because now you can traverse through DOM tree with existing\nstore. Note that ",Object(a.b)("inlineCode",{parentName:"p"},"elmInstanceConnection.branches.parents")," allows you to go up\nwhile ",Object(a.b)("inlineCode",{parentName:"p"},"elmInstanceConnection.branches.siblings")," allows you to traverse through all\nnode siblings. And not only that, both ways retrieve nodes in order."),Object(a.b)("h2",null,"Test"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"yarn test store\n")),Object(a.b)("h2",null,"License"),Object(a.b)("p",null,"This package is licensed under the ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/jalal246/dflex/tree/master/packages/store/LICENSE"}),"GPL-3.0 License")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-store-index-md-8c34dc4bc8dc9313c8ac.js.map