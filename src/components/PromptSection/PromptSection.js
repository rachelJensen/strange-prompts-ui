import './PromptSection.css';
import React, { Component } from 'react';
import PromptForm from '../PromptForm/PromptForm';
import RandomPrompt from '../RandomPrompt/RandomPrompt';
import promptsData from '../prompts-data'

class PromptSection extends Component {
  constructor(){
    super()
    this.state = {
      promptsData: promptsData,
      randomPrompt:'',
    }
  }

  componentDidMount() {
    this.createRandomPrompt();
  }

  createRandomPrompt = () => {
    const randomNum = Math.floor(Math.random() * this.state.promptsData.length + 1);
    this.setState({randomPrompt: this.state.promptsData[randomNum]})
  }

  render() {
    // console.log(this.createRandomPrompt())
    return (
       <div className="prompt-section">
           <button onClick={this.createRandomPrompt}>Generate New Prompt</button>
           <RandomPrompt randomPrompt={this.state.randomPrompt}/>
           <PromptForm />
       </div>
    )
  }
}

export default PromptSection;