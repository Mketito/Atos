import {Component} from '@angular/core'

@Component ({
    selector: 'app-fechaactual',
  /*call file*/  templateUrl: './fechaactual.component.html',
//  /*embbebide code*/  templateUrl: '<p>Coruna, {{hoy | date:"dd/MMMM/y - HH:mm"}}</p>'+
//  '  <app-copyright></app-copyright>',
    styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent{
    hoy = new Date();
}