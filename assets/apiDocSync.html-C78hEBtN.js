import{_ as r,b as p,c,a as l}from"./gitlabToken-DrhdorRh.js";import{_ as d,e as m,g as t,f as h,j as n,h as o,r as a,o as u}from"./app-C0dpXOSi.js";const g="/img/2022.2.7/apiSyncSetting_en.png",y={};function b(f,e){const s=a("Badge"),i=a("ColorIcon");return u(),m("div",null,[e[5]||(e[5]=t("h1",{id:"api-document-sync",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#api-document-sync"},[t("span",null,"API document sync")])],-1)),t("p",null,[e[0]||(e[0]=n("Version required: ")),o(s,{text:"2022.2.7+"})]),e[6]||(e[6]=t("h2",{id:"introduction",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#introduction"},[t("span",null,"Introduction")])],-1)),t("p",null,[e[1]||(e[1]=n("Used to synchronize API documents to ")),o(i,{icon:"github"}),e[2]||(e[2]=n(" Github、")),o(i,{icon:"gitee"}),e[3]||(e[3]=n(" Gitee、")),o(i,{icon:"gitlab"}),e[4]||(e[4]=n(" Gitlab, and generate online documents and share them with other partners."))]),e[7]||(e[7]=h('<p><img src="'+r+'" alt="apiSync" loading="lazy"></p><h2 id="attention" tabindex="-1"><a class="header-anchor" href="#attention"><span>Attention</span></a></h2><ul><li>If there is no network in the intranet, please use self-host GitLab. GitLab only supports v4 and does not support other versions.</li><li>If the configured repo does not exist in the cloud, a <mark>private</mark> repo will be created by default.</li><li>The project access has been 404. The solution is to set the repo as public or pull the partner to the repo to become a member when sharing.</li><li>A project corresponds to synchronizing a repo. After determining a repo and synchronizing some documents, keep the repo the same because history cannot be synchronized.</li></ul><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p><img src="'+g+`" alt="apiSyncSetting" title="Config" loading="lazy"></p><p>Note: The naming policy determines the name of the file synchronized to the cloud. The file name comes from the Javadoc or Swagger method naming annotation. If JavaDoc is checked, please ensure that the naming of the Javadoc and Swagger method must be <mark>short</mark>. Otherwise, the file name in the cloud will be very long. In this case, consider checking the method name to synchronize.</p><h2 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span>Token</span></a></h2><p>When checking the permissions, you must ensure that the minimum permissions are checked to support the API sync and that the token is within the valid time frame.</p><div class="language-" data-highlighter="shiki" data-ext="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>Github:must check &#39;repo&#39;</span></span>
<span class="line"><span>Gitlab:must check &#39;api&#39;</span></span>
<span class="line"><span>Gitee:must check &#39;projects&#39;</span></span></code></pre></div><ul><li><p>GitHub <img src="`+p+'" alt="githubToken" title="Github token" loading="lazy"></p></li><li><p>Gitlab <img src="'+c+'" alt="gitlabToken" title="Gitlab token" loading="lazy"></p></li><li><p>Gitee <img src="'+l+'" alt="giteeToken" title="Gitee token" loading="lazy"></p></li></ul>',10))])}const G=d(y,[["render",b],["__file","apiDocSync.html.vue"]]),I=JSON.parse('{"path":"/en/guide/features/apiDocSync.html","title":"API document sync","lang":"en-US","frontmatter":{"description":"API document sync Version required: Introduction Used to synchronize API documents to apiSync Attention If there is no network in the intranet, please use self-host GitLab. GitL...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://api-buddy.com/guide/features/apiDocSync.html"}],["meta",{"property":"og:url","content":"https://api-buddy.com/en/guide/features/apiDocSync.html"}],["meta",{"property":"og:site_name","content":"Fast Request"}],["meta",{"property":"og:title","content":"API document sync"}],["meta",{"property":"og:description","content":"API document sync Version required: Introduction Used to synchronize API documents to apiSync Attention If there is no network in the intranet, please use self-host GitLab. GitL..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://api-buddy.com/img/2022.2.7/apiSync.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-06T12:24:21.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-06T12:24:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"API document sync\\",\\"image\\":[\\"https://api-buddy.com/img/2022.2.7/apiSync.png\\",\\"https://api-buddy.com/img/2022.2.7/apiSyncSetting_en.png \\\\\\"Config\\\\\\"\\",\\"https://api-buddy.com/img/2022.2.7/githubToken.png \\\\\\"Github token\\\\\\"\\",\\"https://api-buddy.com/img/2022.2.7/gitlabToken.png \\\\\\"Gitlab token\\\\\\"\\",\\"https://api-buddy.com/img/2022.2.7/giteeToken.png \\\\\\"Gitee token\\\\\\"\\"],\\"dateModified\\":\\"2025-03-06T12:24:21.000Z\\",\\"author\\":[]}"]]},"git":{"createdTime":1717147459000,"updatedTime":1741263861000,"contributors":[{"name":"Kings","username":"Kings","email":"963987632@qq.com","commits":2,"url":"https://github.com/Kings"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mister-Hope"}]},"readingTime":{"minutes":0.88,"words":264},"filePathRelative":"en/guide/features/apiDocSync.md","localizedDate":"May 31, 2024","autoDesc":true}');export{G as comp,I as data};
