
// In fact, this is the bare minimum to create an Ionic Page


// We first import the Component module from the Angular core library. 
// Just like the App component was standardized to Component, 
// so was the Page component standardized also to Component.

import { Component } from '@angular/core';

// Next, we import the NavController component from the Ionic-Angular library. 
// One of the biggest things you have to remember when you are developing with 
// Angular, is you have to import the components, and features from Angular 
// and Ionic in order to use them. 

import { NavController } from 'ionic-angular';

// Component decorator defines its templateUrl as ‘home.html’ 
// and the selector to be page-home.

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

}
