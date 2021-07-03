import {makeAutoObservable} from 'mobx';

export default class NavStore{
  numberOfSlides = 0;
  setActiveSlide;
  getActiveSlide;
  constructor(numberOfSlides, setActiveSlide, getActiveSlide){
    makeAutoObservable(this);
    this.numberOfSlides = numberOfSlides;
    this.setActiveSlide = setActiveSlide;
    this.getActiveSlide = getActiveSlide;
  }
  setSlide = (x) =>{
    this.setActiveSlide(parseInt(x));
  } 
  renderSlideNumbers = () =>{
    return [...Array(this.numberOfSlides)].map((el, i)=>{
      return <button className={`${this.getActiveSlide()===i?"active":""}`} onClick={()=>{this.setSlide(i)}}>{i+1}</button>
    })
  }
}