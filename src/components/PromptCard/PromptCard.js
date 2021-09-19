import './PromptCard.css';

const PromptCard = ({id, character, setting, problem}) => {
  return (
      <div className="prompt-card" key={id}>
          {/* <h4>PromptCard Section</h4> */}
          <p className='saved-prompt'>{character} {setting} {problem}</p>
          <button className='delete-btn'>delete</button>
      </div>
  )
}

export default PromptCard;
