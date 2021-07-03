import {makeAutoObservable} from 'mobx';
import {Link} from 'react-router-dom';

export default class BodyStore{
  numberOfSlides = 0;
  msgColour = 'black';
  setActiveSlide;
  getActiveSlide;
  getSlide;
  constructor(numberOfSlides, setActiveSlide, getActiveSlide, getSlide){
    makeAutoObservable(this);
    this.numberOfSlides = numberOfSlides;
    this.setActiveSlide = setActiveSlide;
    this.getActiveSlide = getActiveSlide;
    this.getSlide = getSlide;
  }
  setActive = (shift) =>{
    let currentActive = this.getActiveSlide();
    const nextActive = currentActive += parseInt(shift);
    this.setActiveSlide(nextActive);
  }
  seeResults = () =>{
    
  }
  renderPreviousButton = () =>{
    if(this.getActiveSlide() === 0){
      return <span></span>;
    }
    return <button onClick={()=>{this.setActive(-1)}}>Previous</button>;
  }
  renderNextButton = () =>{
    if(this.getActiveSlide() === this.numberOfSlides-1){
      return <Link to="./results"><button>Result</button></Link>;
    }
    return <button onClick={()=>{this.setActive(1)}}>Next</button>;
  }
  renderAnswers = () =>{
    const slide = this.getSlide(this.getActiveSlide());
    return [...Array(slide.numberOfAnswers)]
      .map((el, i)=>{
        return <button 
         className={`${slide.userChoices.includes(i)?"active":""}`}
         onClick={()=>{this.msgAlert(slide.toggleChoice(i))}}
         >
           {i+1}
        </button>;
      });
  }
  renderQuestionNumber = () =>{
    return <h1>Pitanje {this.getActiveSlide()+1}</h1>
  }
  renderPossibleAnswNum = () =>{
    const msg = 'Preostalo mogucih odgovora: ';
    const slide = this.getSlide(this.getActiveSlide());
    const possibleAnswNum = slide.getNumberOfAllowedChoices() - slide.userChoices.length;
    return <h2 style={{color:this.msgColour}}>{msg + possibleAnswNum}</h2>;
  }
  msgAlert = (status) =>{
    if(!status){
      this.msgColour = 'red';
      setTimeout(()=>{
        this.msgColour = 'black';
      }, 3000);
    }
  }
}