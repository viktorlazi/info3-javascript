import './Style/nav.css';
import {observer} from 'mobx-react';

function Nav({store}) {
  return (
    <nav>
      {
        [...Array(store.numberOfSlides)].map((el, i)=>{
          return <button className={`${store.getActiveSlide()===i?"active":""}`} onClick={()=>{store.setSlide(i)}}>{i}</button>
        })
      }
      <button>Rješenje</button>
    </nav>
  )
}
export default observer(Nav);
