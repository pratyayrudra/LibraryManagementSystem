import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})
export class StudentDetails {

  stud: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stud = this.navParams.get('student');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetails');
  }

}
