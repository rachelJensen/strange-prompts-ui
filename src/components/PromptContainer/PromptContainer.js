import './PromptContainer.css';
import PromptCard from '../PromptCard/PromptCard'
import React, { Component } from 'react';
import { getData } from '../utils';


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

  render = () => {
    const faveCards = this.state.favorites.map(compiled => {
      return (
          <PromptCard
            id={compiled.id}
            character={compiled.character}
            setting={compiled.setting}
            problem={compiled.problem}
          />
        )
    })

    return (
     <main className='prompts-collection'>
        <section className="prompts-style">
          {/* {this.state.error && <h2>Oh no!</h2>} */}
          {!this.state.favorites ? <h3>Loading…</h3> : faveCards}
        </section>
     </main>
   )
  }
}

export default PromptContainer;
