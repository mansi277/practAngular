import { CompileShallowModuleMetadata, ngModuleJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
// import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //InputOutputDecorator
  foods:string[]=[];
  addFood(foodItem:string){
    this.foods.push(foodItem);
  }
  reciveData(event:string){
    alert(event)
  }

  title = 'folder';
  //Events
  clickCount=0
  clickMe() {
    this.clickCount++;
  }
  changeText: boolean;
    constructor() {
       this.changeText = false;
    }
    clickEvent(){
      alert(" Offer Applied Successfully");
    }
    searchEvent(){
      alert("Sorry item not found");
    }

    onKeyUpEvent(event: any){
      console.log(event.target.value);
    }
    onKeydownMain(event: any){
      console.log("Keydown event");
    } 
  //Directives
  // switchValue=2;
  // txtColor="red";
  // public topics=["pipes","services","API"];

  //INTERPOLATION
  // name='coditas';
  // getFunction(){
  //   return 'mansi'
  // };
  // obj={
  //   user:'joe',
  //   age:22
  // };
  // arr=['mansi','sakshi','zainab'];
  // a=10;
  // b=90;

}
