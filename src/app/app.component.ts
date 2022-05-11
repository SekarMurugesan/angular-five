import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apple';
  para:boolean=false
  
  Fruit=['Apple','Orange','Mango','Disable']
  Number=['One','Two','Three']
  update(fruitName: any){
    switch(fruitName){
      case 'Disable':
      this.para=true;
      break;
      case 'Apple':
      this.para=false;
      break;
      case 'Orange':
      this.para=false;
      break;
      case 'Mango':
      this.para=false;
      break;
    }

  }
}
