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
      <h1>Pitanje {store.getActiveSlide()+1}</h1>
      <div className="answers">
        {
          store.renderAnswers()
        }
      </div>
    </div>
  )
}
export default observer(Body);
