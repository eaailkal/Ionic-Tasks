// We first import the Component module from the Angular core library. 
// Just like the App component was standardized to Component, 
// so was the Page component standardized also to Component.

import { Component } from '@angular/core';

// Next, we import the NavController component from the Ionic-Angular library. 
// One of the biggest things you have to remember when you are developing with 
// Angular, is you have to import the components, and features from Angular 
// and Ionic in order to use them. 

import { NavController } from 'ionic-angular';

// Component decorator defines its templateUrl as ‘tasklist.html’ 
// and the selector to be page-tasklist.

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {

  tasks: Array<Object> = [];

  constructor(public navCtrl: NavController)  {
  this.tasks = [
          {title:'Milk', status: 'open'},
          {title:'Eggs', status: 'open'},
          {title:'Syrup', status: 'open'},
          {title:'Pancake Mix', status: 'open'}
          ];
  }

}
