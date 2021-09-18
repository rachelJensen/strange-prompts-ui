import './PromptCard.css';

const PromptCard = ({id, character, setting, problem}) => {
  return (
      <div className="prompt-card-section" key={id}>
          {/* <h4>PromptCard Section</h4> */}
          <p>{character} {setting} {problem}</p>
      </div>
  )
}

export default PromptCard;