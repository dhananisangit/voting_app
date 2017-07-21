import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'login-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class LoginComponent {
  username;
  login = true;
  userID;
  selectedUser:User;

  constructor(private http: Http){}

  onLogin(){
    var data = {
      'name':this.username
    }
    this.http.post('http://localhost:3000/v1/login', data)
    .map((res: Response) => {
      this.userID = res.json().userID;
      this.selectedUser = {
        'id': this.userID,
        'name': this.username
      }
      this.login = false
    })
    .toPromise()
    .catch(this.handleError);



  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
