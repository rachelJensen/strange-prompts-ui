import './PromptCard.css';

const PromptCard = ({id, key, description}) => {
  return (
      <div className="prompt-card-section">
          <h4>PromptCard Section</h4>
          <p>{description}</p>
      </div>
  )
}

export default PromptCard;