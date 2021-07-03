import './Style/body.css';
import {observer} from 'mobx-react';

function Body({store}) {
  return (
    <div className="body">
      <div className="changeSlide">
        {
          store.getActiveSlide() === 0?
          <span></span>:
          <button onClick={()=>{store.setSlide(-1)}}>Previous</button>
        }
        {
          store.getActiveSlide() === store.numberOfSlides-1?
          <span></span>:
          <button onClick={()=>{store.setSlide(1)}}>Next</button>
        }
      </div>
      <h1>Pitanje 1</h1>
      <div className="answers">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  )
}
export default observer(Body);
