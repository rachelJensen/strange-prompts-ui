import './PromptSection.css';
import PromptForm from '../PromptForm/PromptForm';
import RandomPrompt from '../RandomPrompt/RandomPrompt';

const PromptSection = () => {
  return (
      <div className="prompt-section">
          <button>Generate New Prompt</button>
          <RandomPrompt />
          <PromptForm />
      </div>
  )
}

export default PromptSection;