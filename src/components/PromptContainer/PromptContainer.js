import './PromptContainer.css';
import PromptCard from '../PromptCard/PromptCard'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getData, deleteData } from '../utils';


class PromptContainer extends Component {
  constructor() {
    super();
    this.state = {
      allPrompts: [],
      favorites: [],
      error: ''
    }
  }

  componentDidMount = () => {
    this.makeFetch()
  }

  makeFetch(){
    getData('https://strange-prompts-api.herokuapp.com/api/v1/prompts')
    .then(data => this.setState({ allPrompts: data }))
    .then(data => getData('https://strange-prompts-api.herokuapp.com/api/v1/favorites')
      .then(data => this.makeFavorites(data))
      .then(faves => this.setState({favorites: faves}))
      )
  }

  makeFavorites = (favorites) => {
    return favorites.map((prompt) => {
      return {
        id: prompt.id,
        character: this.state.allPrompts[prompt.character -1].character,
        setting: this.state.allPrompts[prompt.setting -1].setting,
        problem: this.state.allPrompts[prompt.problem -1].problem
      }
    })
  }

  deleteFavorite = (num) => {
    const idInfo = {
      id: num
    }
    deleteData('https://strange-prompts-api.herokuapp.com/', idInfo)
    this.makeFetch()
  }

  createPromptCard() {
    return this.state.favorites.map(compiled => {
      return (
          <PromptCard
            id={compiled.id}
            key={compiled.id}
            character={compiled.character}
            setting={compiled.setting}
            problem={compiled.problem}
            deleteFavorite={this.deleteFavorite}
          />
        )
    })
  }
 
  render = () => {
    return (
     <main className='prompts-collection'>
        <section className="prompts-style">
          {!this.state.favorites ? <h3>Loading…</h3> : this.createPromptCard()}
        </section>
     </main>
   )
  }
}

PromptContainer.propTypes = {
  allPrompts: PropTypes.array,
  favorites: PropTypes.array,
  idInfo: PropTypes.object,
  error: PropTypes.string,
  createPromptCard: PropTypes.func,
  deleteFavorite: PropTypes.func,
  makeFavorites: PropTypes.func,
  makeFetch: PropTypes.func,
}

export default PromptContainer;
