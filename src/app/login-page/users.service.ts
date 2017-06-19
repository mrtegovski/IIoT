import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/Rx"

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUser() {
    return this.http.get("https://iiot-demo.firebaseio.com/users/1.json")
                    .map((data: Response) => data.json());
  }
}
