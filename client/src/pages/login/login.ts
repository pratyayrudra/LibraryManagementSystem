import { Observable } from 'rxjs/Observable';
import { StudentService } from './../../providers/student-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  studentLoginForm : FormGroup;
  email: any;
  password: any;
  Student: any;
  user: Observable<firebase.User>;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,public afAuth: AngularFireAuth,public studentService: StudentService) {
    this.studentLoginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z@.0-9 ]*'), Validators.required])],
        password: ['',Validators.required]
    });
    this.user = this.afAuth.authState;

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  studentLogin(){
    this.afAuth.auth.signInWithEmailAndPassword(
      this.email,
      this.password
    ).then(
      res => {
        this.studentService.getStudentDetail(this.email)
          .subscribe(res =>{
          this.Student= res;
          console.log(this.Student);
          this.goToDetailPage(this.Student);
          console.log('Logged In');
        })
      }).catch(function(error){
      //Error Handler
      alert(error.message);
    });
    
};


goToDetailPage(Student){
  console.log(Student);
  this.navCtrl.push('StudentDetailPage', {Student: Student});
}

signUp(){
  this.navCtrl.push("StudentAddingPage");
}

goToWelcome(){
  this.afAuth.auth.signOut().then(()=>
  this.navCtrl.push("Welcome"))
}

}
