import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

import { Posts } from '../model/posts';

@Injectable()
export class BoardService {

  private test_postsURL = "http://localhost:8000/posts/"
  private _postsURL = "http://18.204.211.251/posts/"

  constructor(private http: Http) { }

  getAllPostsList(): Observable<Posts[]> {
    return this.http.get(this._postsURL).map((response: Response) => {
      return <Posts[]>response.json();
    }).catch(this.handleError);
  }

  getPostsById(id:string): Observable<Posts> {
    return this.http.get(this._postsURL + id + '/').map((response: Response) => {
      return <Posts>response.json();
    }).catch(this.handleError);
  }

  create(posts: any, filename: any) {
    return this.http.post(this._postsURL, posts, this.jwt(filename)).map((response: Response) => response.json());
  }

  update(posts: any, id: any) {
    // return this.http.put(this._postsURL, id + '/', posts).map()
  }

  delete(id:string) {
    return this.http.delete(this._postsURL + id + '/').map((response: Response) => {
      return <Posts>response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  private jwt(filename: any) {
    // create authorization header with jwt token
    // localStorage 에서 currentUser 불러오기
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      // request header에  Authorization 라는 이름으로 currentUser의 user id 보내기
      let headers = new Headers({ 'Authorization': JSON.stringify(currentUser.user.id),
        'Content-Disposition': 'attachment; filename=' + filename
      });
      return new RequestOptions({ headers: headers});
    }
  }
}
