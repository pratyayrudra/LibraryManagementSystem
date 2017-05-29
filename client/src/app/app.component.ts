import { StudentService } from './../providers/student-service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LibraryService } from './../providers/library-service';

@Component({
  templateUrl: 'app.html',
  providers: [LibraryService, StudentService]
})
export class MyApp {
  rootPage:string ="Welcome";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.hide();
      splashScreen.hide();
});
    
    };
  }


