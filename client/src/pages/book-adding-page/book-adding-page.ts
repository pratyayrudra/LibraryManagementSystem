import { LibraryService } from './../../providers/library-service';
import { Component } from '@angular/core';
import { IonicPage, ViewController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-book-adding-page',
  templateUrl: 'book-adding-page.html',
})
export class BookAddingPage {

  name: any;
  publisher: any;
  author: any;
  pages: any;
  image_url: any;
  bookAddingForm: FormGroup;

  constructor(public viewCtrl: ViewController,public formBuilder: FormBuilder,public libraryService: LibraryService) {
    this.bookAddingForm = formBuilder.group({
      'name': ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z\' ]*'), Validators.required])],
      'publisher': ['', Validators.required],
      'author': ['', Validators.required],
      'pages': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(4)])],
      'image_url': ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookAddingPage');
  }

  closeSignUpModal(){
    this.viewCtrl.dismiss();
  }

  addBook(){
    var bookDetail = {
      'name': this.name,
      'publisher': this.publisher,
      'author': this.author,
      'pages': this.pages,
      'image_url': this.image_url
    }
    
    this.libraryService.addBook(bookDetail)
      .subscribe(() => {console.log('Book Added'), this.viewCtrl.dismiss()})
  }

}
