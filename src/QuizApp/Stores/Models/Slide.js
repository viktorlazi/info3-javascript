import {makeAutoObservable} from 'mobx';

export default class Slide{
  order;
  userChoices = [];
  numberOfAnswers;
  constructor(order){
    makeAutoObservable(this);
    this.order = order;
    this.setNumberOfAnswersRnd();
  }
  setNumberOfAnswersRnd = () =>{
    const rnd = Math.floor(Math.random() * 6) + 2; // 2-8
    this.numberOfAnswers = rnd;
  }
  getNumberOfAllowedChoices = () =>{
    return 2 + 1 + this.order;
  }
  toggleChoice = (x) =>{
    console.log(this.getNumberOfAllowedChoices());

    if(this.userChoices.includes(x)){
      this.userChoices = this.userChoices.filter(e=>e!==x);
      return true;
    }
    if(this.userChoices.length >= this.getNumberOfAllowedChoices()){
      return false;
    }
    this.userChoices.push(x);
    this.userChoices.sort();
    return true;
  }
}