import './Style/quizApp.css';
import Body from './Components/Body';
import Nav from './Components/Nav';
import QuizAppStore from './Stores/QuizAppStore';

const store = new QuizAppStore();

function QuizApp() {
  return (
    <div className="quizApp">
      <Nav store={store.navStore} />
      <Body store={store.bodyStore} />
    </div>
  )
}
export default QuizApp;