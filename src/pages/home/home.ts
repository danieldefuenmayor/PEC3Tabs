import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  firstName: string;
  lastName:  string;

  constructor(public navCtrl: NavController) {
    this.firstName = "Nombre";
    this.lastName  = "Apellido"
  }

}
