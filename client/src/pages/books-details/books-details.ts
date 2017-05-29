import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-books-details',
  templateUrl: 'books-details.html',
})
export class BooksDetails {

  book: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book = this.navParams.get('book');
    console.log(this.book);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksDetails');
  }

}
