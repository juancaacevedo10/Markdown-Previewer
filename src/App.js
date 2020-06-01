import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let marked = require('marked')

class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        markdown : `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
          
  Heres some code, \`<div></div>\`, between 2 backticks.
        
  \`\`\`
  // this is multi-line code:
        
  function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
  return multiLineCode;
  }
  }
  \`\`\`
          
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
        
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
        
  And if you want to get really crazy, even tables:
        
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
        
  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
        - That look like this.
        
        
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
        
  ![React Logo w/ Text](https://goo.gl/Umyytc)
        `
      }
    
  }

  actualizarmarkdown = function(markdown){
    this.setState({markdown})
  }

  render(){
    let {markdown} = this.state;
  return (
    <div className="App container-fluid px-5 text-monospace">
      <div>


      <div className="card mb-5 shadow  mb-5 bg-white rounded mx-5">
  <div className="card-header bg-primary text-left" id="editor">
    Codigo
  </div>
  <div className="card-body bg-light">
    <blockquote className="blockquote mb-0">

    <form id='fromContolIsTextarea'>
        <label>Markdown input</label>
        <textarea  className="form-control" rows="7" placeholder="`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`" value={markdown} onChange={(event)=>this.actualizarmarkdown(event.target.value)}></textarea>
        </form>

    </blockquote>
  </div>
</div>

<div className="card shadow  mb-5 bg-white rounded mx-5">
  <div className="card-header bg-primary text-left" id="preview">
    Previewer
  </div>
  <div className="card-body ">
    <blockquote className="blockquote mb-0">

    <form  id='fromContolIsTextarea'>
        <h1>Markdown output</h1>
        <div className="text-left border border-primary" dangerouslySetInnerHTML = {{__html: marked(markdown)}}></div>
        </form>
    </blockquote>
  </div>
</div>
</div>
</div>    
        
  );
  }
}

export default App;
