import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Ramon';
  name2 = 'rAmon morCILLO cAScales';

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salary = 1234.5;

  hero = {
    name: 'Logan',
    keyName: 'Wolverine',
    age: 500,
    address: {
      street: "First",
      number: 4,
    }
  }
  promiseValue = new Promise ((resolve, reject)=>{
    setTimeout(()=>resolve('The data is here!'),3500);
  })

  date = new Date();

  video = 'phjJA4-UVIU';
}
