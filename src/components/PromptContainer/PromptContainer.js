import './PromptContainer.css';
import '../PromptCard/PromptCard';
import React, { Component } from 'react';

class PromptContainer extends Component {

    // const promptsCollection = this.props.prompts.map(prompt => {
    //     return (
    //       <PromptCard
    //         id={prompt.id}
    //         key={prompt.id}
    //         info={prompt.info}
    //       />
    //     )
    //   })
  render(){
    return (
     <div className='prompts-collection'>
         <h4>No saved prompts !</h4>
       {/* {promptsCollection} */}
     </div>
   )
  }
}

export default PromptContainer;