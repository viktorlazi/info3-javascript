import './Style/quizApp.css';
import Body from './Components/Body';
import Nav from './Components/Nav';
import QuizAppStore from './Stores/QuizAppStore';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Results from './Results';

const store = new QuizAppStore();

function QuizApp() {
  return (
    <div className="quizApp">
      <Router>
        <Route exact path="/">
          <Nav store={store.navStore} />
          <Body store={store.bodyStore} />
        </Route>
        <Route path="/results">
          <Results slides={store.slides} />
        </Route>
      </Router>      
    </div>
  )
}
export default QuizApp;