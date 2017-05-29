import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-books-borrowed-page',
  templateUrl: 'books-borrowed-page.html',
})
export class BooksBorrowedPage {

  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('User');
    console.log(this.user)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksBorrowedPage');
  }

}
