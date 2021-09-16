import './PromptSection.css';
import React, { Component } from 'react';
import PromptForm from '../PromptForm/PromptForm';
import RandomPrompt from '../RandomPrompt/RandomPrompt';
// import promptsData from '../prompts-data';
import getData from '../utils';

class PromptSection extends Component {
  constructor(){
    super()
    this.state = {
      promptsData: [],
      randomPrompt:'',
      error: ''
    }
  }

  componentDidMount() {
    //add fetch call her and assign data to state.promptsData
    getData('https://strange-prompts-api.herokuapp.com/api/v1/prompts')
      .then (data => this.setState({ promptsData: data }))
      .then(data => this.createRandomPrompt())
      .catch(err => this.setState({ error: err }))

  }

  createRandomPrompt = () => {
    const randomNum = Math.floor(Math.random() * this.state.promptsData.length + 1);
    this.setState({randomPrompt: this.state.promptsData[randomNum]})
  }



  render() {
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