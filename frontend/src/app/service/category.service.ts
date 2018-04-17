import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class CategoryService {

  private test_categoryURL = "http://localhost:8000/category/";
  private _categoryURL = "http://13.125.195.234:80/category/";

  constructor(private http: Http) { }

  getCategoryList(): Observable<any[]> {
    return this.http.get(this.test_categoryURL).map((response: Response) => {
      return <any[]>response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
