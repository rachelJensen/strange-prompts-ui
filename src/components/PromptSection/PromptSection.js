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
      randomPrompt: {},
      // error: '',
      favorites: []
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
      acc.indices.push(index); 
      return acc;
    }, {indices: []})

    this.setState({ randomPrompt: prompt });
  }

  assignRandomIndex = () => {
    return Math.floor(Math.random() * this.state.promptsData.length);
  }

  saveFavorite = () => {
    const fav = this.state.randomPrompt.indices;
    this.setState({ favorites: [...this.state.favorites, fav]})
    // console.log(fav, this.state.favorites)
  }

  render() {
    return (
       <div className="prompt-section">
           <RandomPrompt randomPrompt={this.state.randomPrompt}/>
           <button onClick={this.createRandomPrompt}>Generate New Prompt</button>
           <button onClick={this.saveFavorite}>Add to favorites</button>
           <PromptForm />
       </div>
    )
  }
}

export default PromptSection;