import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-student-detail-page',
  templateUrl: 'student-detail-page.html',
})
export class StudentDetailPage {

  Student: any;
  user: Observable<firebase.User>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth) {
    this.Student = this.navParams.get('Student');
    console.log(this.Student);
    this.user = this.afAuth.authState;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetailPage');
  }
  goToWelcome(){
    this.afAuth.auth.signOut();
    this.navCtrl.push('Welcome');
  };

  showAllBooks(){
    this.navCtrl.push('AllBooks');
  };

  booksBorrowed(User){
    console.log(User);
    this.navCtrl.push('BooksBorrowedPage', {User : User})
  }

}
