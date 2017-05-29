import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-adminlogin',
  templateUrl: 'adminlogin.html',
})
export class Adminlogin {

  adminLoginForm : FormGroup;
  email: any;
  password: any;
  user: Observable<firebase.User>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,public afAuth: AngularFireAuth) {

     this.adminLoginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.maxLength(18), Validators.pattern('[a-z0-9@. ]*'), Validators.required])],
        password: ['',Validators.compose([Validators.maxLength(14), Validators.pattern('[abcd1234]*'), Validators.required])]
    });
    this.user = this.afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad  Adminlogin');
  }

adminLogin(){

  this.afAuth.auth.signInWithEmailAndPassword(
    this.email,
    this.password
  ).then(res => {
    this.navCtrl.push('Home')
  }).catch(function(error) {
  // Handle Errors here.
  alert(error.message);
  console.log(error);
});
}

goBackToWelcome(){
  this.navCtrl.push("Welcome");
}

}
