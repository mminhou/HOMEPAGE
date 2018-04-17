import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-single-page-detail',
  templateUrl: './single-page-detail.component.html',
  styleUrls: ['./single-page-detail.component.css']
})
export class SinglePageDetailComponent implements OnInit {
  currentUser: any = {};
  category: any;
  category_id: any;
  posts_id: any;
  posts: any = {};

  constructor( private route: ActivatedRoute, private router: Router, private postsService: PostsService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.posts_id = this.route.snapshot.paramMap.get('posts_id');
    this.category = this.route.snapshot.paramMap.get('category');
    this.category_id = this.route.snapshot.paramMap.get('category_id');
    this._getPostsById(this.posts_id);
  }

  _getPostsById(id: any) {
    this.postsService.getPostsById(id)
      .subscribe(
        resultArray => this.posts = resultArray,
        error => console.log("Error :: " + error)
      )
  }

  _delete() {
    console.log(this.postsService.delete(this.posts_id))
    this.postsService.delete(this.posts_id);
    this.router.navigateByUrl(this.category + '/' + this.category_id);
    location.reload();
  }

  back() {
    this.router.navigateByUrl(this.category + '/' + this.category_id);
  }

}
