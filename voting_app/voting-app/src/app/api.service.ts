import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class APIService {
  constructor(private http: Http){}
  getRequest(apiEndPoint) {
    return this.http.get('http://localhost:3000/v1/login')
                    .map((res: Response) => {return res})
                    .toPromise()
                    .catch(this.handleError);

  }

  postRequest(apiEndPoint, data) {
  return this.http.post('http://localhost:3000/v1/login', data)
                  .map((res: Response) => {return res})
                  .toPromise()
                  .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
