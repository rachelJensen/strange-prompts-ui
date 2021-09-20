import './PromptCard.css';
import PropTypes from 'prop-types';

const PromptCard = ({id, character, setting, problem, deleteFavorite, key}) => {
  return (
      <div className="prompt-card" >
          <p className='saved-prompt'>{character} {setting} {problem}</p>
          <button onClick={() => deleteFavorite(id)}className='delete-btn'>delete</button>
      </div>
  )
}

PromptCard.propTypes = {
  id: PropTypes.number.isRequired,
  character: PropTypes.string.isRequired,
  setting: PropTypes.string.isRequired,
  problem: PropTypes.string.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  key: PropTypes.number.isRequired
}

export default PromptCard;
