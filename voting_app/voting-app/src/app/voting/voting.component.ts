import { Component, Input } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';
// import {OrderByPipe} from './voting.filter';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Component({
  selector : 'app-voting',
  templateUrl : './voting.component.html'
})
export class VotingComponent {

  @Input() user: User;

  results = []
  data = []
  constructor(private http: Http){}

  ngOnInit(){
    this.results = []
    console.log()
    var data = {
      'userID':this.user.id
    }
    this.http.post('http://localhost:3000/v1/fetchvotes', data)
    .map((res: Response) => {
      this.ready(res.json().results, res.json().userID);
    })
    .toPromise();
  }

  ready(userVoteResults, userID){
    this.http.get('http://localhost:3000/v1/getlist')
    .map((res: Response) => {
      this.data = res.json()
      for(var i=0;i<res.json().length;i++){
        this.results.push({
          'userID':userID,
          'fruitID':this.data[i].ID,
          'name':this.data[i].Name,
          'totalVotes': this.data[i].total_votes,
          'voted':userVoteResults[this.data[i].Name]!=undefined?true:false
        })
      }
    })
    .toPromise();
  }

  voteFruit(fruitID, userID){
    var data = {
            'fruitID':fruitID,
            'userID':userID
    }
    this.http.post('http://localhost:3000/v1/vote', data)
    .map((res: Response) =>{
        this.ngOnInit()
    })
    .toPromise();
  }
}
