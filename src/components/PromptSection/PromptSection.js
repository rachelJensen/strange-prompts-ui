import './PromptSection.css';
import React, { Component } from 'react';
import PromptForm from '../PromptForm/PromptForm';
import RandomPrompt from '../RandomPrompt/RandomPrompt';
// import promptsData from '../prompts-data';
import { getData, postData } from '../utils';

class PromptSection extends Component {
  constructor(){
    super()
    this.state = {
      promptsData: [],
      randomPrompt: {},
      // error: ''
    }
  }

  componentDidMount() {
    getData('https://strange-prompts-api.herokuapp.com/api/v1/prompts')
      .then (data => this.setState({ promptsData: data }))
      .then(data => this.createRandomPrompt())
      .catch(err => console.log(err))
  }

  createRandomPrompt = () => {
    const fragments = ['character', 'setting', 'problem'];

    const prompt = fragments.reduce((acc, fragment) => {
      let index = this.assignRandomIndex();
      acc[fragment] = this.state.promptsData[index][fragment];
      acc.indices.push(index + 1)
      return acc;
    }, {indices: []})

    this.setState({ randomPrompt: prompt });
  }

  assignRandomIndex = () => {
    return Math.floor(Math.random() * this.state.promptsData.length);
  }

  saveFavorite = () => {
    const indices = this.state.randomPrompt.indices
    const formattedFave = {
      character: indices[0],
      setting: indices[1],
      problem: indices[2]
    }

    postData('https://strange-prompts-api.herokuapp.com/api/v1/favorites', formattedFave)
  }

  render() {
    return (
       <div className="prompt-section">
           <RandomPrompt randomPrompt={this.state.randomPrompt}/>
           <div className="btn-container">
            <button className="make-new" onClick={this.createRandomPrompt}>Get New Prompt</button>
            <button className="save" onClick={this.saveFavorite}>Save to Favorites</button>
          </div>
       </div>
    )
  }
}

export default PromptSection;
