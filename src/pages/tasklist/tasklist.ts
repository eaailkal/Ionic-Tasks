// We first import the Component module from the Angular core library. 
// Just like the App component was standardized to Component, 
// so was the Page component standardized also to Component.

import { Component } from '@angular/core';

// import AngularFire and FirebaseListObservable modules 
// from the AngularFire 2 library to provide bindings to Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// import { NavController } from 'ionic-angular';
import {NavController, ItemSliding} from 'ionic-angular';

// we need to inject this class definition
import { Task } from './task';

// import the Dialogs module
import { Dialogs } from '@ionic-native/dialogs';

// Component decorator defines its templateUrl as ‘tasklist.html’ 
// and the selector to be page-tasklist.

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})

export class TaskListPage {

  tasks: FirebaseListObservable<any[]>;

  // Our component is going to be using the AngularFire library to communicate with our Firebase database. In order to do this, we will need to pass a reference to that library as a parameter in our constructor

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, private dialogs: Dialogs) {
  // constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
  
  // Since our list of tasks is going to be stored remotely, we can replace our initial tasks array with the AngularFire request to return the data in the tasks sub-directory
  this.tasks = db.list('/tasks');
  }

  addItem() {
    // You are accessing native plugins while testing in the browser. 
    // In order to make plugins work, you should use a real device to test.
    this.dialogs.prompt('Add a task', 'My tasks', ['Ok', 'Cancel'], '').then(
      theResult => {
        if ((theResult.buttonIndex == 1) && (theResult.input1 !== '')) {
          this.tasks.push({ title: theResult.input1, status: 'open' });
        }
      }
    )
  }
      // code with java script prompt
      // let theNewTask: string = prompt("New Task");
      // if (theNewTask !== '') {
      //  this.tasks.push({ title: theNewTask, status: 'open' });
      // }
  

  markAsDone(slidingItem: ItemSliding, task: Task) {
       // The task.$key is the unique key value that is generated by Firebase when it was added
       this.tasks.update(task.$key, { status: 'done' });
       slidingItem.close();
  }

  removeTask(slidingItem: ItemSliding, task: Task) {
       this.tasks.remove(task.$key);
       slidingItem.close();
  }

}

