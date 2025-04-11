import{_ as s,a as m}from"./projectLevelDomainDialog-3VPog_jw.js";import{_ as d,e as u,g as e,f as g,j as o,h as n,i as r,r as i,o as c}from"./app-C0dpXOSi.js";const f={},v={class:"hint-container caution"};function y(j,t){const p=i("Badge"),l=i("ColorIcon"),a=i("RouteLink");return c(),u("div",null,[t[15]||(t[15]=e("h1",{id:"project-级别域名配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#project-级别域名配置"},[e("span",null,"Project 级别域名配置")])],-1)),t[16]||(t[16]=e("p",null,"作用：本功能可以让开发者一键添加域名配置",-1)),e("p",null,[t[0]||(t[0]=o("版本要求: ")),n(p,{text:"2023.1.1+"})]),e("div",v,[t[4]||(t[4]=e("p",{class:"hint-container-title"},"建议",-1)),e("p",null,[t[2]||(t[2]=o("建议使用项目级别域名配置，原来的")),n(a,{to:"/guide/features/settingManager.html"},{default:r(()=>[n(l,{icon:"tool"}),t[1]||(t[1]=o(" 管理配置"))]),_:1}),t[3]||(t[3]=o("将作为全配置配置，并且优先级小于项目级别配置，建议项目域名以项目级别隔离而不要使用全局配置。"))]),t[5]||(t[5]=e("p",null,"使用项目级别配置的好处是当项目多的时候，下拉框选项将减少（排除了其他项目的配置)，只取本项目级别域名与全局域名配置的交集。",-1))]),t[17]||(t[17]=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("ol",null,[e("li",null,"项目名: Api 对应的项目名称。如果开启了自动域名，单模块项目，项目名将自动设置为项目名词，多模块则为模块名。不建议手动替换"),e("li",null,"环境名: 不同的环境，例如将本地命名为 local，开发环境命名为 dev，测试环境命名为 test,生产环境命名为 prod"),e("li",null,"域名: 项目名与环境名下对应的域名")])],-1)),t[18]||(t[18]=e("h2",{id:"自动域名-or-配置文件快速生成",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自动域名-or-配置文件快速生成"},[e("span",null,"自动域名 or 配置文件快速生成")])],-1)),e("ol",null,[e("li",null,[e("p",null,[t[7]||(t[7]=o("自动域名：参考此")),n(a,{to:"/guide/features/autoDomain.html"},{default:r(()=>t[6]||(t[6]=[o("文档")])),_:1}),t[8]||(t[8]=o("，最后根据实际情况只需要修改域名值"))])]),e("li",null,[e("p",null,[t[9]||(t[9]=o("配置文件快速生成：选择项目中的")),t[10]||(t[10]=e("code",null,"application.properties",-1)),t[11]||(t[11]=o("或者")),t[12]||(t[12]=e("code",null,"application.yml",-1)),t[13]||(t[13]=o("，通过配置文件，点击图标")),n(l,{icon:"restfulFastRequest"}),t[14]||(t[14]=o("，可以快捷添加配置。"))])])]),t[19]||(t[19]=g('<p><img src="'+s+'" alt="projectLevelDomainConfig" title="域名配置" loading="lazy"></p><blockquote><p>变量来源</p></blockquote><div class="language-" data-highlighter="shiki" data-ext="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>a. 针对带有环境名如`application-dev.properties`，插件将自动适配`-`与`.`之间的变量作为环境名。</span></span>\n<span class="line"><span>b. 项目名来源于模块名</span></span>\n<span class="line"><span>c. 域名=`http://localhost:port/context-path`</span></span></code></pre></div><h2 id="_2-手动配置域名" tabindex="-1"><a class="header-anchor" href="#_2-手动配置域名"><span>2.手动配置域名</span></a></h2><p><img src="'+m+'" alt="projectLevelDomainDialog" title="域名列表" loading="lazy"></p><p>点击项目级别域名手动输入对应的值</p>',6))])}const D=d(f,[["render",y],["__file","projectLevelDomainConfig.html.vue"]]),C=JSON.parse('{"path":"/guide/features/projectLevelDomainConfig.html","title":"Project 级别域名配置","lang":"zh-CN","frontmatter":{"description":"Project 级别域名配置 作用：本功能可以让开发者一键添加域名配置 版本要求: 建议 建议使用项目级别域名配置，原来的将作为全配置配置，并且优先级小于项目级别配置，建议项目域名以项目级别隔离而不要使用全局配置。 使用项目级别配置的好处是当项目多的时候，下拉框选项将减少（排除了其他项目的配置)，只取本项目级别域名与全局域名配置的交集。 提示 项目名:...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://api-buddy.com/en/guide/features/projectLevelDomainConfig.html"}],["meta",{"property":"og:url","content":"https://api-buddy.com/guide/features/projectLevelDomainConfig.html"}],["meta",{"property":"og:site_name","content":"Fast Request"}],["meta",{"property":"og:title","content":"Project 级别域名配置"}],["meta",{"property":"og:description","content":"Project 级别域名配置 作用：本功能可以让开发者一键添加域名配置 版本要求: 建议 建议使用项目级别域名配置，原来的将作为全配置配置，并且优先级小于项目级别配置，建议项目域名以项目级别隔离而不要使用全局配置。 使用项目级别配置的好处是当项目多的时候，下拉框选项将减少（排除了其他项目的配置)，只取本项目级别域名与全局域名配置的交集。 提示 项目名:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://api-buddy.com/img/2023.1.1/projectLevelDomainConfig.png \\"域名配置\\""}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-21T12:21:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-21T12:21:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Project 级别域名配置\\",\\"image\\":[\\"https://api-buddy.com/img/2023.1.1/projectLevelDomainConfig.png \\\\\\"域名配置\\\\\\"\\",\\"https://api-buddy.com/img/2023.1.1/projectLevelDomainDialog.png \\\\\\"域名列表\\\\\\"\\"],\\"dateModified\\":\\"2024-08-21T12:21:04.000Z\\",\\"author\\":[]}"]]},"git":{"createdTime":1717147459000,"updatedTime":1724242864000,"contributors":[{"name":"Kings","username":"Kings","email":"963987632@qq.com","commits":1,"url":"https://github.com/Kings"},{"name":"kings","username":"kings","email":"963987632@qq.com","commits":1,"url":"https://github.com/kings"}]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"guide/features/projectLevelDomainConfig.md","localizedDate":"2024年5月31日","autoDesc":true}');export{D as comp,C as data};
