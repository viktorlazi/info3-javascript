export default class Slide{
  order;
  userChoices = [];
  numberOfAnswers;
  constructor(order){
    this.order = order;
    this.setNumberOfAnswersRnd();
  }
  setNumberOfAnswersRnd = () =>{
    const rnd = Math.floor(Math.random() * 6) + 2; // 2-8
    this.numberOfAnswers = rnd;
  }
  getNumberOfAllowedChoices = () =>{
    return 2 + this.order;
  }
  toggleChoice = (x) =>{
    if(this.userChoices.includes(x)){
      this.userChoices = this.userChoices.filter(e=>e!==x);
      return;
    }
    if(this.userChoices.length > this.getNumberOfAllowedChoices()){
      this.alertUser();
      return;
    }
    this.userChoices.push(x);
    this.userChoices.sort();
    return;
  }
  alertUser = () =>{
    alert();
  }
}