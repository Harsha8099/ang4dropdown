import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl:'./app.component.html'
})
export class AppComponent  { name = 'Angular12345'; 
names = ["Harsha","Hari"];
selectedName ="Harsha";
}