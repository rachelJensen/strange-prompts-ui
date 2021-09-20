import './RandomPrompt.css';
import PropTypes from 'prop-types';

const RandomPrompt = ({randomPrompt}) => {
  return (
      <div className="random-prompt-generator">
          <h3>{randomPrompt.character} {randomPrompt.setting} {randomPrompt.problem}</h3>
      </div>
  )
}

RandomPrompt.propTypes = {
  randomPrompt: PropTypes.object.isRequired,
}

export default RandomPrompt;