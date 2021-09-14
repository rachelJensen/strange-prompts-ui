import './App.css';
import Header from '../Header/Header';
import PromptSection from '../PromptSection/PromptSection';
import PromptContainer from '../PromptContainer/PromptContainer';
import Error from '../Error/Error';

const App = () => {
  return (
    <div className="App">
      <Header />
      <PromptSection />
    </div>
  );
}

export default App;
