export default class ResultsModel{
  renderAnswers = (slides) =>{
    return slides.map((e, i)=>{
      return <p>Question {i+1}: {this.getChoices(e)}</p>
    });
  }
  getChoices = (slide) =>{
    return slide.userChoices.map((e, i)=>{
      return (e+1) + (i===slide.userChoices.length-1?null:',');
    });
  }
}