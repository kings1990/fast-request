import{_ as c}from"./ai_en-Dprj7FwK.js";import{_ as m}from"./aiPromptTrigger-Btkgi_Xb.js";import{_ as u,e as g,g as e,f as i,h as r,j as a,i as o,r as l,o as h}from"./app-C0dpXOSi.js";const y="/img/features/aiPromptExample_en.png",f="/img/2024.1.3/aiManagenemt_en.png",A={};function B(b,t){const p=l("Badge"),d=l("CodeTabs");return h(),g("div",null,[t[7]||(t[7]=e("h1",{id:"ai",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ai"},[e("span",null,"AI")])],-1)),e("p",null,[t[0]||(t[0]=a("Version required: ")),r(p,{text:"2024.1.4+"})]),t[8]||(t[8]=i('<h2 id="_1-introduce" tabindex="-1"><a class="header-anchor" href="#_1-introduce"><span>1. Introduce</span></a></h2><p><img src="'+c+'" alt="AI" loading="lazy"></p><p>In order to make AI&#39;s responses more accurate, we have made AI settings more refined and added 3 dimensions: <code>Summary</code>、<code>Example question</code>、<code>Example question&#39;s answer</code>. This design allows the AI to train a question and answer session so that the results are more in line with expectations.</p><p>We can try to express various possibilities of the question in the <code>Summary</code>, and the give an example in <code>Example question</code> and <code>Example question&#39;s answer</code>.</p><p>The following is a case of using AI to help optimize JSON messages</p>',5)),r(d,{id:"21",data:[{id:"Summary"},{id:"Example question"},{id:"Example question's answer"}]},{title0:o(({value:n,isActive:s})=>t[1]||(t[1]=[a("Summary")])),title1:o(({value:n,isActive:s})=>t[2]||(t[2]=[a("Example question")])),title2:o(({value:n,isActive:s})=>t[3]||(t[3]=[a("Example question's answer")])),tab0:o(({value:n,isActive:s})=>t[4]||(t[4]=[e("div",{class:"language-","data-highlighter":"shiki","data-ext":"",style:{"background-color":"#282c34",color:"#abb2bf"}},[e("pre",{class:"shiki one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",null,"You are an excellent JSON handler. Whenever a user sends you a JSON, you should respond to")]),a(`
`),e("span",{class:"line"},[e("span",null,"the user in a fixed JSON formatand replace the values in the JSON fields with")]),a(`
`),e("span",{class:"line"},[e("span",null,"human-readable content according to the meaning of the JSON keys. You will only modify")]),a(`
`),e("span",{class:"line"},[e("span",null,"the values in the JSON without changing its structure.")])])])],-1)])),tab1:o(({value:n,isActive:s})=>t[5]||(t[5]=[e("div",{class:"language-json","data-highlighter":"shiki","data-ext":"json",style:{"background-color":"#282c34",color:"#abb2bf"}},[e("pre",{class:"shiki one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"{ "),e("span",{style:{color:"#E06C75"}},'"id"'),e("span",{style:{color:"#ABB2BF"}},": "),e("span",{style:{color:"#D19A66"}},"1"),e("span",{style:{color:"#ABB2BF"}},", "),e("span",{style:{color:"#E06C75"}},'"title"'),e("span",{style:{color:"#ABB2BF"}},": "),e("span",{style:{color:"#98C379"}},'"title_ahska"'),e("span",{style:{color:"#ABB2BF"}},", "),e("span",{style:{color:"#E06C75"}},'"simpleDesc"'),e("span",{style:{color:"#ABB2BF"}},": "),e("span",{style:{color:"#98C379"}},'"simpleDesc_ohga1"'),e("span",{style:{color:"#ABB2BF"}}," }")])])])],-1)])),tab2:o(({value:n,isActive:s})=>t[6]||(t[6]=[e("div",{class:"language-json","data-highlighter":"shiki","data-ext":"json",style:{"background-color":"#282c34",color:"#abb2bf"}},[e("pre",{class:"shiki one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},'  "id"'),e("span",{style:{color:"#ABB2BF"}},": "),e("span",{style:{color:"#D19A66"}},"1"),e("span",{style:{color:"#ABB2BF"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},'  "title"'),e("span",{style:{color:"#ABB2BF"}},": "),e("span",{style:{color:"#98C379"}},`"Harry Potter and the Philosopher's Stone"`),e("span",{style:{color:"#ABB2BF"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},'  "simpleDesc"'),e("span",{style:{color:"#ABB2BF"}},": "),e("span",{style:{color:"#98C379"}},'"Join Harry Potter on a thrilling adventure at Hogwarts School of Witchcraft and Wizardry as he uncovers dangerous secrets and saves the rewarding world."')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"}")])])])],-1)])),_:1}),t[9]||(t[9]=i('<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The value selected in the editor needs to be replaced with <strong>${SELECTION}</strong>. The complete example is as following.</p><p><strong>${SELECTION}</strong> can be quickly generated through the {} icon in the editor.</p></div><p><img src="'+y+'" alt="" loading="lazy"></p><h2 id="_2-api-key-configuration" tabindex="-1"><a class="header-anchor" href="#_2-api-key-configuration"><span>2. Api key configuration</span></a></h2><ol><li><a href="https://platform.openai.com/docs/api-reference/chat" target="_blank" rel="noopener noreferrer">OpenAI</a> needs to be pasted into the Api key field after generation in web page.</li><li><a href="https://codegeex.cn/" target="_blank" rel="noopener noreferrer">CodeGeeX</a> need to click <code>Get api key</code> and log in. Plugin will complete the api key automatically.</li><li>Custom OpenAI refer to the first method to obtain the API key.</li></ol><p><img src="'+f+'" alt="" loading="lazy"></p><h2 id="_3-trigger-ai-prompt" tabindex="-1"><a class="header-anchor" href="#_3-trigger-ai-prompt"><span>3. Trigger AI prompt</span></a></h2><p><img src="'+m+'" alt="" loading="lazy"></p><p>After selecting the content in the editor, click the prompt line.</p>',8))])}const I=u(A,[["render",B],["__file","ai.html.vue"]]),_=JSON.parse(`{"path":"/en/guide/features/ai.html","title":"AI","lang":"en-US","frontmatter":{"description":"AI Version required: 1. Introduce AI In order to make AI's responses more accurate, we have made AI settings more refined and added 3 dimensions: Summary、Example question、Exampl...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://api-buddy.com/guide/features/ai.html"}],["meta",{"property":"og:url","content":"https://api-buddy.com/en/guide/features/ai.html"}],["meta",{"property":"og:site_name","content":"Fast Request"}],["meta",{"property":"og:title","content":"AI"}],["meta",{"property":"og:description","content":"AI Version required: 1. Introduce AI In order to make AI's responses more accurate, we have made AI settings more refined and added 3 dimensions: Summary、Example question、Exampl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://api-buddy.com/img/2024.1.4/ai_en.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-21T12:21:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-21T12:21:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AI\\",\\"image\\":[\\"https://api-buddy.com/img/2024.1.4/ai_en.png\\",\\"https://api-buddy.com/img/features/aiPromptExample_en.png\\",\\"https://api-buddy.com/img/2024.1.3/aiManagenemt_en.png\\",\\"https://api-buddy.com/img/features/aiPromptTrigger.png\\"],\\"dateModified\\":\\"2024-08-21T12:21:04.000Z\\",\\"author\\":[]}"]]},"git":{"createdTime":1717147459000,"updatedTime":1724242864000,"contributors":[{"name":"Kings","username":"Kings","email":"963987632@qq.com","commits":1,"url":"https://github.com/Kings"},{"name":"kings","username":"kings","email":"963987632@qq.com","commits":1,"url":"https://github.com/kings"}]},"readingTime":{"minutes":1.06,"words":317},"filePathRelative":"en/guide/features/ai.md","localizedDate":"May 31, 2024","autoDesc":true}`);export{I as comp,_ as data};
