import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// import components from the angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { TaskListPage } from '../pages/tasklist/tasklist';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Dialogs } from '@ionic-native/dialogs';

export const firebaseConfig = {
    apiKey: "AIzaSyDW4r711eDdzQYNUcXuX2I-uVRGXFyOjd0",
    authDomain: "tasks-8fd38.firebaseapp.com",
    databaseURL: "https://tasks-8fd38.firebaseio.com",
    projectId: "tasks-8fd38",
    storageBucket: "tasks-8fd38.appspot.com",
    messagingSenderId: "810885243354"
};

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
    // HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
    // HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
