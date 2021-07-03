import ResultsModel from './Stores/Models/ResultsModel';
import {Link} from 'react-router-dom';

const model = new ResultsModel();

function Results({slides}) {
  return (
    <div className="results">
      {model.renderAnswers(slides)}
      <Link to="../">
        <button>Povratak</button>
      </Link>
    </div>
  )
}
export default Results;