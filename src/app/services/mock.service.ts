import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MockService {

  constructor(private http: HttpClient) {
  }

  getMockJson(path: string): Observable<any> {
    return this.http.get(path);
  }

}