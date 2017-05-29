import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-admin-book-detail-page',
  templateUrl: 'admin-book-detail-page.html',
})
export class AdminBookDetailPage {

  book: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book = navParams.get('book');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminBookDetailPage');
  }

}
