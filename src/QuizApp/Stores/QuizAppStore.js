import {makeAutoObservable} from 'mobx';
import Slide from './Models/Slide'
import NavStore from './NavStore';
import BodyStore from './BodyStore';

const numberOfSlides = 4;

export default class QuizAppStore{
  activeSlide = 0;
  slides = [];
  navStore;
  bodyStore;
  constructor(){
    makeAutoObservable(this);
    this.initSlides(numberOfSlides);
    this.navStore = new NavStore(
      numberOfSlides, 
      this.setActiveSlide, 
      this.getActiveSlide
    );
    this.bodyStore = new BodyStore(
      numberOfSlides, 
      this.setActiveSlide, 
      this.getActiveSlide, 
      this.getSlide
    );
  }
  initSlides = (x) =>{
    for (let i = 0; i < x; i++) {
      this.slides.push(new Slide(i));
    }
  }
  setActiveSlide = (x) =>{
    this.activeSlide = x;
  }
  getActiveSlide = () =>{
    return this.activeSlide;
  }
  getSlide = (x) =>{
    return this.slides[x];
  }
}