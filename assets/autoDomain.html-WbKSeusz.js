import{_ as l,c as d,b as o,f as t,d as n,a as s,o as m,r as a}from"./app-BX86nSxj.js";const p="/img/2023.1.4/autoDomain_en.png",c={};function u(g,e){const r=a("Badge"),i=a("ColorIcon");return m(),d("div",null,[e[13]||(e[13]=o("h1",{id:"auto-domain",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#auto-domain"},[o("span",null,"Auto domain")])],-1)),o("p",null,[e[0]||(e[0]=t("Version required: ")),n(r,{text:"2023.1.4"})]),e[14]||(e[14]=o("h2",{id:"trigger-point",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#trigger-point"},[o("span",null,"Trigger point")])],-1)),o("p",null,[e[1]||(e[1]=t("When clicking ")),n(i,{icon:"restfulFastRequest"}),e[2]||(e[2]=t(" on the left side of the method, if no domain is configured, it will be automatically created."))]),e[15]||(e[15]=o("h2",{id:"project-name",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#project-name"},[o("span",null,"Project name")])],-1)),e[16]||(e[16]=o("p",null,[t("The project name is taken from the api "),o("code",null,"module name")],-1)),o("p",null,[e[3]||(e[3]=t("Why? For example, there are two modules' APIs under the project, ")),e[4]||(e[4]=o("code",null,"Module-1",-1)),e[5]||(e[5]=t(" and ")),e[6]||(e[6]=o("code",null,"Module-2",-1)),e[7]||(e[7]=t(". If the domain name value of ")),e[8]||(e[8]=o("code",null,"Module-1",-1)),e[9]||(e[9]=t(" is already stored and when clicking the ")),n(i,{icon:"restfulFastRequest"}),e[10]||(e[10]=t(" on the left of the API method under ")),e[11]||(e[11]=o("code",null,"Module-2",-1)),e[12]||(e[12]=t(", the old version cannot automatically switch the project name."))]),e[17]||(e[17]=s('<p>It is recommended not to <mark>manually add the project name</mark> later because the plugin cannot find the mapping relationship, which may easily result in using the domain name of <code>Module-1</code> instead of the domain name of <code>Module-2</code> when saving the API of <code>Module-2</code>.</p><p>Therefore, another benefit of auto domain name is the <mark>automatic switching of API domain names</mark>. If it does not exist, it will be automatically generated. If there is a need for improvement, developers only need to modify the domain name value! The plugin will automatically adapt!</p><h2 id="configuration-file-parsing-logic" tabindex="-1"><a class="header-anchor" href="#configuration-file-parsing-logic"><span>Configuration file parsing logic</span></a></h2><ol><li>Read <code>application.yml</code> or <code>bootstrap.yml</code>. If the configuration <code>server.port</code> or <code>server.servlet.context-path</code> can be found, take the configuration.</li><li>If the above configuration files cannot find <code>server.port</code> or <code>server.servlet.context-path</code>, read <code>spring.profiles.active</code> as the variable <code>env</code>. Then look for <code>application-env.yml</code> or <code>bootstrap-env.yml</code> to find the configuration <code>server.port</code> or <code>server.servlet.context-path</code>.</li><li>The logic for <code>properties</code> files is similar.</li><li>If the above configurations cannot be found, use <code>port=8080, context-path=/</code>.</li><li>The project name is taken from the <code>module name</code>.</li><li><code>spring.profiles.active</code> does not support Maven variables parse, for example <code>spring.profiles.active=@active.env@</code>.</li></ol><h2 id="config-switch" tabindex="-1"><a class="header-anchor" href="#config-switch"><span>Config switch</span></a></h2><p><img src="'+p+'" alt="autoDomain" loading="lazy"></p>',6))])}const h=l(c,[["render",u],["__file","autoDomain.html.vue"]]),v=JSON.parse(`{"path":"/en/guide/features/autoDomain.html","title":"Auto domain","lang":"en-US","frontmatter":{"description":"Auto domain Version required: Trigger point When clicking Project name The project name is taken from the api module name Why? For example, there are two modules' APIs under the...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://api-buddy.com/guide/features/autoDomain.html"}],["meta",{"property":"og:url","content":"https://api-buddy.com/en/guide/features/autoDomain.html"}],["meta",{"property":"og:site_name","content":"Fast Request"}],["meta",{"property":"og:title","content":"Auto domain"}],["meta",{"property":"og:description","content":"Auto domain Version required: Trigger point When clicking Project name The project name is taken from the api module name Why? For example, there are two modules' APIs under the..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://api-buddy.com/img/2023.1.4/autoDomain_en.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T09:24:19.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-31T09:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Auto domain\\",\\"image\\":[\\"https://api-buddy.com/img/2023.1.4/autoDomain_en.png\\"],\\"dateModified\\":\\"2024-05-31T09:24:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Trigger point","slug":"trigger-point","link":"#trigger-point","children":[]},{"level":2,"title":"Project name","slug":"project-name","link":"#project-name","children":[]},{"level":2,"title":"Configuration file parsing logic","slug":"configuration-file-parsing-logic","link":"#configuration-file-parsing-logic","children":[]},{"level":2,"title":"Config switch","slug":"config-switch","link":"#config-switch","children":[]}],"git":{"createdTime":1717147459000,"updatedTime":1717147459000,"contributors":[{"name":"Kings","username":"Kings","email":"963987632@qq.com","commits":1,"url":"https://github.com/Kings"}]},"readingTime":{"minutes":1.01,"words":304},"filePathRelative":"en/guide/features/autoDomain.md","localizedDate":"May 31, 2024","autoDesc":true}`);export{h as comp,v as data};