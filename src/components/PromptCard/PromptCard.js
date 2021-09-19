import './PromptCard.css';

const PromptCard = ({id, character, setting, problem, deleteFavorite, key}) => {
  return (
      <div className="prompt-card-section" >
          <p className='saved-prompt'>{character} {setting} {problem}</p>
          <button onClick={() => deleteFavorite(id)}className='delete-btn'>delete</button>
      </div>
  )
}

export default PromptCard;
