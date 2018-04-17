import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../service/posts.service';


@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  category_id: any;
  category: any;
  _postsArray: any[] = [];

  constructor( private route: ActivatedRoute, private postsService: PostsService ) { }

  ngOnInit() {
    this.category_id = this.route.snapshot.paramMap.get("category_id");
    this.category = this.route.snapshot.paramMap.get("category");
    this._getPostsList(this.category_id)
  }

  _getPostsList(id: any) {
    this.postsService.getPostsList(id)
      .subscribe(
        resultArray => this._postsArray = resultArray,
        error => console.log("Error :: " + error)
      )
  }

}
