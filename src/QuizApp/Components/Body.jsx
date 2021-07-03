import './Style/body.css';

function Body() {
  return (
    <div className="body">
      <div className="changeSlide">
        <button>Previous</button>
        <button>Next</button>
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
export default Body;
