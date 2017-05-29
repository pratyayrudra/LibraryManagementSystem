import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  user: Observable<firebase.User>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth) {
  this.user = this.afAuth.authState;
}

  ionViewWillLoad() {
    console.log('ionViewDidLoad Home');
  }
   

  goToStudents(){
    this.navCtrl.push('AdminStudentPage');
  };

  goToBooks(){
    this.navCtrl.push('AdminBookPage');
  }
 
  goToWelcome(){
    this.afAuth.auth.signOut();
    this.navCtrl.push('Welcome');
  }
}
