import './PromptForm.css';
import React, { Component } from "react";
import React, { useState } from "react";

class PromptForm extends Component {
    constructor() {
        super() 
        this.state = {
            prompt: '',
            error: ''
        }
    }

    handleChange = event => {
        this.setState({ prompt: event.target.value });
    }

    clearInputs = () => {
        this.setState({ prompt: '' });
    }

    render() {
        return (
            <div className="prompt-form-section">
                <form>
                <textarea className="writing-prompt" rows="10" cols="100">
                </textarea>
                <input
                  type='text'
                  placeholder='Keep writing...'
                  name='prompt'
                  value={this.state.prompt}
                  onChange={event => this.handleChange(event)}
                />
                <br></br>
                  <button>Submit Prompt</button>
              </form>
            </div>
        )
    }
}

export default PromptForm;