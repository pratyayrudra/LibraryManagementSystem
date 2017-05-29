import { StudentService } from './../providers/student-service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { LibraryService } from './../providers/library-service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '4aad4374'
  }
};

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-hf2qelNNnfYsQVcVryovWRwfp674mEs",
    authDomain: "librarylogin-78ad2.firebaseapp.com",
    databaseURL: "https://librarylogin-78ad2.firebaseio.com",
    projectId: "librarylogin-78ad2",
    storageBucket: "librarylogin-78ad2.appspot.com",
    messagingSenderId: "881499069739"
  };

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LibraryService,
    StudentService
  ]
})
export class AppModule {}
