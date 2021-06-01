import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'omar';
  nombreUpper: string = 'oMAR';
  nombreCompleto: string = 'oMaR tORreS'

  fecha: Date = new Date(); // el dia de hoy

}
