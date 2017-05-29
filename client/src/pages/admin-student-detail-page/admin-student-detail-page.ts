import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminStudentDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-student-detail-page',
  templateUrl: 'admin-student-detail-page.html',
})
export class AdminStudentDetailPage {

  student:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.student = navParams.get('student');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminStudentDetailPage');
  }

  booksBorrowed(User){
    console.log(User);
    this.navCtrl.push('BooksBorrowedPage', {User : User})
  }

}
