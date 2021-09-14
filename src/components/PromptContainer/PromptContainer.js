import './PromptContainer.css';
import '../PromptCard/PromptCard';

const PromptContainer = () => {

    // const promptsCollection = this.props.prompts.map(prompt => {
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
              <h4>Test Card Prompt</h4>
            {/* {promptsCollection} */}
          </div>
        )
}

export default PromptContainer;