import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../service/board.service';
import { Posts } from '../../model/posts';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {
  currentUser: any = {};
  posts: Posts;
  editPosts = false;

  constructor(private route: ActivatedRoute, private boardService: BoardService, private router: Router) { }

  ngOnInit() {
    this.getPostsById(this.route.snapshot.paramMap.get('post_id'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getPostsById(post_id:string) {
    this.boardService.getPostsById(post_id)
      .subscribe(
        resultObj => this.posts = resultObj,
        error => console.log("Error :: " + error)
      );
  }

  removePosts(post_id:string) {
    this.boardService.delete(post_id)
      .subscribe(
        data => {
          this.router.navigateByUrl('/board');
        },
        error => {
        });
  }

  edit() {
    this.editPosts = true;
  }

  back() {
    this.router.navigateByUrl('/board');
  }

}
