import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  baseUrl: any;

  constructor(public http: Http) {
    console.log('Hello StudentService Provider');
    this.baseUrl = 'https://shrouded-bayou-80479.herokuapp.com';
  }

  getStudentDetail(student){
    console.log(this.baseUrl+'/studentbyname/'+student);
    return this.http.get(this.baseUrl+'/studentbyname/'+student)
      .map(res => res.json());
  }

  getStudents(){
    console.log(this.baseUrl+'/students');
    return this.http.get(this.baseUrl+'/students')
      .map(res=> res.json());
  }

  addStudent(studentDetail){
    console.log(this.baseUrl+'/addstudent');
    return this.http.post(this.baseUrl+'/addstudent', studentDetail)
      .map(res => res.json());
  }

}
