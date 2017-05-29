import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LibraryService {
  baseUrl : String;
  employee: any;

  constructor(public http: Http) {
    console.log('Hello LibraryService Provider');
    this.baseUrl = 'https://shrouded-bayou-80479.herokuapp.com';
  }

   getBooks(){
     console.log(this.baseUrl+'/library/books');
    return this.http.get(this.baseUrl+'/')
      .map(res =>  res.json());
  };

  /*updateEmployee(employee){
     var headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.baseUrl+'/employee/'+employee._id, JSON.stringify(employee), {headers: headers})
                .map(res => res.json());
  };*/

  deleteBook(book){
    return this.http.delete(this.baseUrl+'/library/delbook/'+book._id)
                .map(res => res.json());
  };

  addBook(book){
    return this.http.post(this.baseUrl+'/library/addbook',book)
                .map(res => res.json());
  };
  
}
