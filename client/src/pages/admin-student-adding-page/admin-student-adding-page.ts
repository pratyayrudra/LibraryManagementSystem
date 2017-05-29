import { Observable } from 'rxjs/Observable';
import { StudentService } from './../../providers/student-service';
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-admin-student-adding-page',
  templateUrl: 'admin-student-adding-page.html',
})
export class AdminStudentAddingPage {
  
  name: any;
  department: any;
  year: any;
  roll: any;
  phnNo: any;
  email: any;
  password: any;
  user: Observable<firebase.User>;
  Student: any;
  signUpForm : FormGroup;
  
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams,public formBuilder: FormBuilder,public studentService: StudentService,public afAuth: AngularFireAuth) {
    this.signUpForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      department: ['', Validators.required],
      year: ['', Validators.required],
      phnNo: ['', Validators.compose([Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9 ]*'), Validators.required])],
      roll: ['', Validators.compose([Validators.pattern('[0-9 ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9@. ]*'), Validators.required])],
      password: ['', Validators.required]  
    });
    this.user = this.afAuth.authState;

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentAddingPage');
  };

  closeSignUpModal(){
    this.viewCtrl.dismiss();
  };

  signUp(){
    var studentDetail=  {
      'name': this.name,
      'department': this.department,
      'year': this.year,
      'phnNo': this.phnNo,
      'roll': this.roll,
      'email': this.email
    }
      this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(()=> this.addStudent(studentDetail))
      .catch(function(error){
        var errorMessage = error.message;
        if (errorMessage){
          console.log(errorMessage);
        }
      })
  }

  addStudent(studentDetail){
    this.studentService.addStudent(studentDetail)
      .subscribe(res => {
      console.log('Student Added')
      this.closeSignUpModal();
    })
  }


}
