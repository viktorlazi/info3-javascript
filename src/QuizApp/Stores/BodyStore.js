import {makeAutoObservable} from 'mobx';

export default class BodyStore{
  numberOfSlides = 0;
  setActiveSlide;
  getActiveSlide;
  constructor(numberOfSlides, setActiveSlide, getActiveSlide){
    makeAutoObservable(this);
    this.numberOfSlides = numberOfSlides;
    this.setActiveSlide = setActiveSlide;
    this.getActiveSlide = getActiveSlide;
  }
  setSlide = (shift) =>{
    let currentActive = this.getActiveSlide();
    const nextActive = currentActive += parseInt(shift);
    this.setActiveSlide(nextActive);
  } 
}