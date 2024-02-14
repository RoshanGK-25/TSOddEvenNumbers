import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0
  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
      // console.log(this.lastNumber);
      // console.log(this.interval);
    }, 1000) 
  }
  onPauseGame(){
    clearInterval(this.interval);
  }
}
