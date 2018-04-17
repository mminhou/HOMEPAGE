import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../service/board.service';
import { CategoryService } from '../../service/category.service';
import { Posts } from '../../model/posts';
// import { Category } from "../../model/category";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  currentUser: any = {};
  _categoryArray: any[] = [];

  writePosts = false;
  posts: any = {category: "ai"};
  fileSrc: string = '';
  file: any;
  _categoryList: any = [];


  constructor( private boardService: BoardService, private categoryService: CategoryService) { }

  ngOnInit() {
    this._getCategoryList();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  _getCategoryList() {
    this.categoryService.getCategoryList()
      .subscribe(
        resultArray => this._categoryArray = resultArray,
        error => console.log("Error :: " + error)
      )
  }

  callType(value){
    this.posts.category = value;
  }

  /////////////////////////////////////////////////////////////////////////

  back() {
    this.writePosts = false;
  }

  createPosts() {
    this.posts.user = this.currentUser.user.nickname;

    console.log(this.posts.content)

    // console.log(fd, this.posts.file_name)
    this.boardService.create(this.posts, this.posts.file_name)
      .subscribe(
        data => {
          location.reload();
        },
        error => {
        });
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var reader = new FileReader();
    this.posts.file_name = file.name;
    this.posts.file = file;
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

  }
  _handleReaderLoaded(e) {
    var reader = e.target;
    this.fileSrc = reader.result;
    // this.posts.file = this.fileSrc;
  }





}
