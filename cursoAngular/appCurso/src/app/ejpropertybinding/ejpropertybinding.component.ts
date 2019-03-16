import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})
export class EjpropertybindingComponent implements OnInit {

  texto = "txto desde ts"

  constructor() { 
    setTimeout(() =>{
      this.texto = "tiempo despues"+ new Date;
    },3000);
  }

  ngOnInit() {
  }

}
