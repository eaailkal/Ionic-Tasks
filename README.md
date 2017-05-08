# Ionic-Tasks

This is a hybrid "to-do list" app built with Ionic 2 framework and Firebase.


## Getting Started

Latest version of the Ionic CLI and Cordova CLI are needed for creating Ionic projects. Before you do that, you’ll need a recent version of Node.js. [Install Node.js 6](https://nodejs.org/) or greater and then proceed to install the Ionic CLI and Cordova.

```
$ npm install -g ionic cordova
```


### Copy project files and install project dependencies

With Ionic and Cordova in place run:

```
$ ionic start Tasks https://github.com/eaailkal/Ionic-Tasks --v2
```

Once the process is completed, navigate to the Tasks directory that was generated:

```
cd Tasks
```

## Connecting with Firebase 

To add Firebase to your app, you'll need a Firebase project, the Firebase SDK, and a short snippet of initialization [code that has a few details about your project](https://firebase.google.com/docs/web/setup). Open in the code editor file 'app.module.ts' from the /src/app/ directory and replace example credentials with your own Firebase credentials.

```
// your project's customized code snippet from Firebase
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
```

## Testing in the browser 

To test app in a browser run:  

```
$ ionic serve

```
To view in a phone frame and with iOS and Android platforms side-by-sid run:  

```
$ ionic serve --lab
```

## Installing necessary platform tools. 

On Windows iOS platform is not available. On Mac OSX iOS platform is added automatically. In order to add to the project Android platform, run:

```
$ ionic platform add android --save
```

You can test app in the simulator using the cordova commands. For example, to test in the iOS simulator, run:

```
$ ionic build ios
$ ionic emulate ios
```

Substitute **ios** with **android** for Android testing. Testing as a native app on Android is more easier than on iOS. 

**Android development environment requirements**
* [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* [Android Studio](https://developer.android.com/studio/index.html)
* [Updated Android SDK tools, platform and component dependencies](https://developer.android.com/studio/intro/update.html)

Make sure you have Developer Mode and [USB debugging enabled](http://developer.android.com/tools/device.html) on your mobile, plug it in, and run:

```
$ ionic run android --device
```

To build app for production, run:

```
$ ionic build android --prod --release
```

More information regaring deployment provided in [Ionic documentation](https://ionicframework.com/docs/intro/deploying/) online.


## Built With

* [Ionic 2](http://ionicframework.com) - Framework for building hybrid apps
* [Angular 2](https://angular.io) - Java Script framework
* [Firebase](https://firebase.google.com) - Cloud Database by Google
* [NPM](https://www.npmjs.com) - Dependency management
* [Visual Studio Code](https://code.visualstudio.com) - Open source code editor

## Authors

* [Ilya Kalinkin](https://github.com/eaailkal)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* **Chris Griffith** [Tutorial](https://github.com/chrisgriffith/Ionic2Do/tree/Firebase) 

## Future improvements

Show keyboard while adding new item
https://ionicframework.com/docs/native/keyboard/
