class slotMachine {

  counter: number;
  constructor () {
    this.counter = 0;
  }

  private resetCounter():void {
    this.counter = 0;
  }

  private getRandomResult = ():boolean =>  Math.random() >= 0.5;
  
  public play ():void {
    this.counter++;
    const result = [this.getRandomResult(),this.getRandomResult(),this.getRandomResult()];
    console.log(result.toString());
    if (result.some((element) => element === false)){
       console.log(`Good luck next time!!`);
    } else {
       console.log(`Congratulations!!!. You won ${this.counter} coins!!`);
       this.resetCounter();
    }
    console.log(this.counter);
  }

}

const machine1 = new slotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();