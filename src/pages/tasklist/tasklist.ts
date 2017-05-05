// We first import the Component module from the Angular core library. 
// Just like the App component was standardized to Component, 
// so was the Page component standardized also to Component.

import { Component } from '@angular/core';

// Next, we import the NavController component from the Ionic-Angular library. 
// One of the biggest things you have to remember when you are developing with 
// Angular, is you have to import the components, and features from Angular 
// and Ionic in order to use them. 

// import { NavController } from 'ionic-angular';
import {NavController, ItemSliding} from 'ionic-angular';

// import AngularFire and FirebaseListObservable modules from the AngularFire 2 library
import { AngularFire, FirebaseListObservable } from 'angularfire2';

// we need to inject this class definition
import { Task } from './task';

// Component decorator defines its templateUrl as ‘tasklist.html’ 
// and the selector to be page-tasklist.

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {

  tasks: FirebaseListObservable<any[]>;

  // Our component is going to be using the AngularFire library to communicate with our Firebase database. In order to do this, we will need to pass a reference to that library as a parameter in our constructor
  constructor(public navCtrl: NavController, public af: AngularFire) {
  
  // Since our list of tasks is going to be stored remotely, we can replace our initial tasks array with the AngularFire request to return the data in the tasks sub-directory
  this.tasks = af.database.list('/tasks');
  }

  addItem() {
      let theNewTask: string = prompt("New Task");
      if (theNewTask !== '') {
        this.tasks.push({ title: theNewTask, status: 'open' });
      }
  }

  markAsDone(slidingItem: ItemSliding, task: Task) {
       task.status = "done";
       slidingItem.close();
  }

  removeTask(slidingItem: ItemSliding, task: Task) {
       task.status = "removed";
       let index = this.tasks.indexOf(task);
       if (index > -1) {
          this.tasks.splice(index, 1);
       }
       slidingItem.close();
  }

}

