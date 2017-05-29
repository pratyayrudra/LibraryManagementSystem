import { StudentService } from './../../providers/student-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-admin-student-page',
  templateUrl: 'admin-student-page.html',
})
export class AdminStudentPage {

  Students: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public studentService: StudentService,public modalCtrl: ModalController) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad AdminStudentPage');
    this.getStudents();
  }

  getStudents(){  
    this.studentService.getStudents()
      .subscribe(res => this.Students = res)
  }

  goToStudentDetails(student){
    this.navCtrl.push('AdminStudentDetailPage', {student: student});
  };

  addNewStudent(){
    let studentAddingModal: Modal = this.modalCtrl.create('AdminStudentAddingPage')

    studentAddingModal.present();
    studentAddingModal.onDidDismiss(res =>
    this.getStudents());
  };

}
