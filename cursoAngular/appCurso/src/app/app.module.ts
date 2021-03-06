import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//iportacion de nuestro componente
import {FechaactualComponent} from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component'

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
