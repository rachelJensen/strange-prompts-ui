import './PromptSection.css';
import React, { Component } from 'react';
import RandomPrompt from '../RandomPrompt/RandomPrompt';
import PropTypes from 'prop-types';
import { getData, postData } from '../utils';

class PromptSection extends Component {
  constructor(){
    super()
    this.state = {
      promptsData: [],
      randomPrompt: {},
      isDisabled: false,
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
    this.setState({isDisabled: false});
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
    this.setState({isDisabled: true});
  }

  render() {
    return (
       <div className="prompt-section">
           <RandomPrompt randomPrompt={this.state.randomPrompt}/>
           <div className="btn-container">
            <button className="make-new" onClick={this.createRandomPrompt}>Get New Prompt</button>
            <button className="save" disabled={this.state.isDisabled} onClick={this.saveFavorite}>Save to Favorites</button>
          </div>
       </div>
    )
  }
}

PromptSection.propTypes = {
  promptsData: PropTypes.array,
  randomPrompt: PropTypes.object,
  error: PropTypes.string,
  fragments: PropTypes.array,
  formattedFave: PropTypes.object,
  createRandomPrompt: PropTypes.func,
  assignRandomIndex: PropTypes.func,
}

export default PromptSection;
