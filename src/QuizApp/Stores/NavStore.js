import {makeAutoObservable} from 'mobx';

export default class NavStore{
  numberOfSlides = 0;
  setActiveSlide;
  getActiveSlide;
  constructor(numberOfSlides, getActiveSlide){
    makeAutoObservable(this);
    this.numberOfSlides = numberOfSlides;
    this.getActiveSlide = getActiveSlide;
  }
  renderSlideNumbers = () =>{
    return [...Array(this.numberOfSlides)].map((el, i)=>{
      return <button className={`${this.getActiveSlide()===i?"active":""}`}>{i+1}</button>
    })
  }
}