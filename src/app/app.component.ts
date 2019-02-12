import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {


  componentTitle = "I am Component.ts";

  clickHandler(){
  	alert("I AM CLICKED");
  }
}

