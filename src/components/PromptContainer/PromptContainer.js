import './PromptContainer.css';
import '../PromptCard/PromptCard';
import React, { Component } from 'react';
import getData from '../utils';


class PromptContainer extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
  }
  componentDidMount = () => {
    getData('https://strange-prompts-api.herokuapp.com/api/v1/favorites')
    .then(data => this.setState({ favorites: data }))
    //this is not currently a part of the express server
  }
  
  render = () => {
    
    // const favorites = this.state.favorites.map(prompt => {
    //     return (
    //       <PromptCard
    //         id={prompt.id}
    //         key={prompt.id}
    //         info={prompt.info}
    //       />
    //     )
    //   })
    
    return (
     <div className='prompts-collection'>
         <h4>No saved prompts !</h4>
       {/* {promptsCollection} */}
     </div>
   )
  }
}

export default PromptContainer;