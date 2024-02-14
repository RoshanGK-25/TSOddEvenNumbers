import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];
  // onIntervalFired(firedNumber:number) {
  //   console.log(firedNumber);
  // for(let i=0; i<firedNumber-1; i++){
  //   if( firedNumber%2 !== 0){
  //     this.odds[i].push(firedNumber);
  //     console.log("Odd Number: " + this.odds[i])
  //   }
  // }
  // }
  onIntervalFired( firedNumber:number ){
    if (firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
      console.log("Even " + this.evenNumbers)
    }
    else{
      this.oddNumbers.push(firedNumber);
      console.log("Odd " + this.oddNumbers)
    }
  }
  if(){}
}
