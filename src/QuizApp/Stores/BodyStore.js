import {makeAutoObservable} from 'mobx';

export default class BodyStore{
  numberOfSlides = 0;
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
  renderPreviousButton = () =>{
    if(this.getActiveSlide() === 0){
      return <span></span>;
    }
    return <button onClick={()=>{this.setActive(-1)}}>Previous</button>;
  }
  renderNextButton = () =>{
    if(this.getActiveSlide() === this.numberOfSlides-1){
      return <span></span>;
    }
    return <button onClick={()=>{this.setActive(1)}}>Next</button>;
  }
  renderAnswers = () =>{
    const slide = this.getSlide(this.getActiveSlide());
    return [...Array(slide.numberOfAnswers)]
      .map((el, i)=>{
        return <button 
         className={`${slide.userChoices.includes(i)?"active":""}`}
         onClick={()=>{slide.toggleChoice(i)}}
         >
           {i+1}
        </button>;
      });
  }
}