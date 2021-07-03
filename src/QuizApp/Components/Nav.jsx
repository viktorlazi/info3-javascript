import './Style/nav.css';
import {observer} from 'mobx-react';

function Nav({store}) {
  return (
    <nav>
      {
        store.renderSlideNumbers()
      }
      <button>Rješenje</button>
    </nav>
  )
}
export default observer(Nav);
