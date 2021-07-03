import {makeAutoObservable} from 'mobx';
import Slide from './Models/Slide'
import NavStore from './NavStore';
import BodyStore from './BodyStore';

export default class QuizAppStore{
  activeSlide = 0;
  slides = [];
  navStore;
  bodyStore;
  constructor(){
    makeAutoObservable(this);
    this.initSlides(4);
    this.navStore = new NavStore(4, this.setActiveSlide, this.getActiveSlide);
    this.bodyStore = new BodyStore(4, this.setActiveSlide, this.getActiveSlide);
  }
  initSlides = (x) =>{
    for (let i = 0; i < x; i++) {
      this.slides.push(new Slide(x));      
    }
  }
  setActiveSlide = (x) =>{
    this.activeSlide = x;
  }
  getActiveSlide = () =>{
    return this.activeSlide;
  }
}