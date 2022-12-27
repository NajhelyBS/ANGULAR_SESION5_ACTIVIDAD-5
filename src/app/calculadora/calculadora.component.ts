import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
 
  suma = 0;
  resta = 0;
  multiplicacion = 0;
  division = 0;

  Calcular(){
    
    const Num1 = parseInt((<HTMLInputElement>document.getElementById("num1")).value);

    const Num2 = parseInt((<HTMLInputElement>document.getElementById("num2")).value);

    let suma = Num1 + Num2;
    this.suma = suma;
    

    let resta = Num1 - Num2;
    this.resta = resta;


    let multiplicacion = Num1*Num2;
    this.multiplicacion = multiplicacion;

    let division = Num1/Num2;
    this.division = division;


  }

}
