import './PromptCard.css';
import PropTypes from 'prop-types';

const PromptCard = ({id, character, setting, problem, deleteFavorite}) => {
  return (
      <div className="prompt-card">
          <p className='saved-prompt'>{character} {setting} {problem}</p>
          <button onClick={() => deleteFavorite(id)}className='delete-btn'>delete</button>
      </div>
  )
}

PromptCard.propTypes = {
  id: PropTypes.number,
  character: PropTypes.string,
  setting: PropTypes.string,
  problem: PropTypes.string,
  deleteFavorite: PropTypes.func,
}

export default PromptCard;