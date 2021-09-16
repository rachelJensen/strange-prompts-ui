import './PromptSection.css';
import React, { Component } from 'react';
import PromptForm from '../PromptForm/PromptForm';
import RandomPrompt from '../RandomPrompt/RandomPrompt';
import promptsData from '../prompts-data'

class PromptSection extends Component {
  constructor(){
    super()
    this.state = {
      promptsData: [],
      randomPrompt: ''
    }
  }

  render() {
    return (
       <div className="prompt-section">
           <button>Generate New Prompt</button>
           <RandomPrompt />
           <PromptForm />
       </div>
    )
  }
}

export default PromptSection;