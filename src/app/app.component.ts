
// The Angular team adopted a component-based approach 
// to building elements and their associated logic.
// Angular component looks like

// First, the code imports the Component module from 
// the Angular library. In Angular this is how 
// Dependency Injection is handled.
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { TaskListPage } from '../pages/tasklist/tasklist';

// Next comes the actual @Component decorator. What is a decorator?

// Decorators are simply functions that modify a class, property, method, or method parameter.

@Component({
  templateUrl: 'app.html'
  // inline
  // template: `<ion-nav [root]="rootPage"></ion-nav>`
  // Angular one-way data-binding syntax of [] to set the root property to the rootPage variable.
})

// We use the @Component decorator to provide some metadata about our code to the compiler. We define the custom HTML selector to use. So when we use <my-first-component></my-first-component>, the associated template will be inserted into the DOM. Templates can come into two fashions: inline or as an external file and referenced using templateUrl.

// After the decorator, we export the class definition itself, MyApp.
// We can see that variable is set within the class definition

export class MyApp {
  // rootPage = HomePage;
  rootPage = TaskListPage;

  // The Ionic CLI auto names this class MyApp. Next, it defines the rootPage variable 
  // to be the HomePage component.

  // The component’s constructor has the Ionic Platform component passed as a parameter. Within the constructor, a JavaScript Promise is made from the platform.ready function. Once Ionic and Cordova are done bootstrapping, this Promise will be returned, and any device specific code will be safe to execute.

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  sayHello() {
        console.log('Hello! Prepare to die.')
  }
}
