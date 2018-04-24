import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";


@Injectable()
export class PostsService {

  private test_postsURL = "http://localhost:8000/posts/"
  private _postsURL = "http://18.204.211.251/posts/"

  constructor(private http: Http) { }

  getPostsList(id: any): Observable<any[]> {
    return this.http.get(this._postsURL + '?category=' + id).map((response: Response) => {
      return <any[]>response.json();
    }).catch(this.handleError)
  }

  getPostsById(id: any): Observable<any[]> {
    return this.http.get(this._postsURL + id).map((response: Response) => {
      return <any[]>response.json();
    }).catch(this.handleError)
  }

  delete(id: number) {
    // console.log(this.http.delete(this.test_postsURL + id + '/'))
    return this.http.delete(this._postsURL + id + '/').subscribe((response: Response) => {
    })
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
