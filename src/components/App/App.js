import './App.css';
import Header from '../Header/Header';
import PromptSection from '../PromptSection/PromptSection';
import PromptContainer from '../PromptContainer/PromptContainer';
import Error from '../Error/Error';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-section">
        <Switch>
          <Route exact path="/" render={ () =>  <PromptSection />}/>
          <Route exact path="/saved-prompts" render={ () => <PromptContainer />}/>
          <Route path="*" render={() => <Error />}/>
        </Switch>
      </main>
    </div>
  );
}

App.propTypes = {
  Header: PropTypes.element,
  PromptSection: PropTypes.element,
  PromptContainer: PropTypes.element,
  Error: PropTypes.element
}

export default App;
