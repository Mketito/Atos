import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemetodo',
  templateUrl: './ejemetodo.component.html',
  styleUrls: ['./ejemetodo.component.css']
})
export class EjemetodoComponent implements OnInit {

  puntuacion = 69;

  constructor() { }

  ngOnInit() {
  }

  getPuntuacion(){
    return this.puntuacion;
  }
}
