import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbindint',
  templateUrl: './ejeventbindint.component.html',
  styleUrls: ['./ejeventbindint.component.css']
})
export class EjeventbindintComponent implements OnInit {

  textEvent = "Texto a modifcar";

  constructor() { }

  ngOnInit() {
  }

  modText(){
    this.textEvent = "buttom clicked";
  }
}
