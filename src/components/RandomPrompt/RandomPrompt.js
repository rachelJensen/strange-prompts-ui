import './RandomPrompt.css';

const RandomPrompt = ({randomPrompt}) => {
  return (
      <div className="random-prompt-generator">
          <h3>{randomPrompt.character} {randomPrompt.problem} {randomPrompt.seeting}</h3>
      </div>
  )
}

export default RandomPrompt;