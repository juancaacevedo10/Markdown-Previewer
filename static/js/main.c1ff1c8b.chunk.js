(this.webpackJsonpmp=this.webpackJsonpmp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),i=(n(12),n(3)),l=n(4),c=n(6),d=n(5),m=(n(13),n(14),n(15)),u=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).actualizarmarkdown=function(e){this.setState({markdown:e})},a.state={markdown:"\n  # Welcome to my React Markdown Previewer!\n\n  ## This is a sub-heading...\n  ### And here's some other cool stuff:\n          \n  Heres some code, `<div></div>`, between 2 backticks.\n        \n  ```\n  // this is multi-line code:\n        \n  function anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n  return multiLineCode;\n  }\n  }\n  ```\n          \n  You can also make text **bold**... whoa!\n  Or _italic_.\n  Or... wait for it... **_both!_**\n  And feel free to go crazy ~~crossing stuff out~~.\n        \n  There's also [links](https://www.freecodecamp.com), and\n  > Block Quotes!\n        \n  And if you want to get really crazy, even tables:\n        \n  Wild Header | Crazy Header | Another Header?\n  ------------ | ------------- | ------------- \n  Your content can | be here, and it | can be here....\n  And here. | Okay. | I think we get it.\n        \n  - And of course there are lists.\n    - Some are bulleted.\n      - With different indentation levels.\n        - That look like this.\n        \n        \n  1. And there are numbererd lists too.\n  1. Use just 1s if you want! \n  1. But the list goes on...\n  - Even if you use dashes or asterisks.\n  * And last but not least, let's not forget embedded images:\n        \n  ![React Logo w/ Text](https://goo.gl/Umyytc)\n        "},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.markdown;return r.a.createElement("div",{className:"App container-fluid px-5 text-monospace"},r.a.createElement("div",null,r.a.createElement("div",{className:"card mb-5 shadow  mb-5 bg-white rounded mx-5"},r.a.createElement("div",{className:"card-header bg-primary text-left",id:"editor"},"Codigo"),r.a.createElement("div",{className:"card-body bg-light"},r.a.createElement("blockquote",{className:"blockquote mb-0"},r.a.createElement("form",{id:"fromContolIsTextarea"},r.a.createElement("label",null,"Markdown input"),r.a.createElement("textarea",{className:"form-control",rows:"7",placeholder:"`# Welcome to my React Markdown Previewer! ## This is a sub-heading...\n### And here's some other cool stuff: Heres some code, \\`<div></div>\\`, between 2 backticks. \\`\\`\\`\n// this is multi-line code: function anotherExample(firstLine, lastLine) { if (firstLine == '\\`\\`\\`' && lastLine == '\\`\\`\\`') { return multiLineCode; }\n}\n\\`\\`\\` You can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~. There's also [links](https://www.freecodecamp.com), and\n> Block Quotes! And if you want to get really crazy, even tables: Wild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it. - And of course there are lists. - Some are bulleted. - With different indentation levels. - That look like this. 1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images: ![React Logo w/ Text](https://goo.gl/Umyytc)\n`",value:t,onChange:function(t){return e.actualizarmarkdown(t.target.value)}}))))),r.a.createElement("div",{className:"card shadow  mb-5 bg-white rounded mx-5"},r.a.createElement("div",{className:"card-header bg-primary text-left",id:"preview"},"Previewer"),r.a.createElement("div",{className:"card-body "},r.a.createElement("blockquote",{className:"blockquote mb-0"},r.a.createElement("form",{id:"fromContolIsTextarea"},r.a.createElement("h1",null,"Markdown output"),r.a.createElement("div",{className:"text-left border border-primary",dangerouslySetInnerHTML:{__html:m(t)}})))))))}}]),n}(a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.c1ff1c8b.chunk.js.map