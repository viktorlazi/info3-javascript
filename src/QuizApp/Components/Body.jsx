import './Style/body.css';
import {observer} from 'mobx-react';

function Body({store}) {  
  return (
    <div className="body">
      <div className="changeSlide">
        {
          store.renderPreviousButton()
        }
        {
          store.renderNextButton()
        }        
      </div>
      <div>
        {
          [
            store.renderQuestionNumber(),
            store.renderPossibleAnswNum()
          ]
        }
      </div>
      <div className="answers">
        {
          store.renderAnswers()
        }
      </div>
    </div>
  )
}
export default observer(Body);
