import './App.css';
import QuizApp from './QuizApp/QuizApp';
import {observer} from 'mobx-react';

function App() {
  return (
    <div className="App">
      <QuizApp />    
    </div>
  );
}
export default observer(App);
