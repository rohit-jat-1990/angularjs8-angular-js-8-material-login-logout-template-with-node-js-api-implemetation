import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private subscription: Subscription;
  posts: any;
  config = {
    itemsPerPage: 2,
    currentPage: 1,
    totalItems: 2
  };
  collection = { count: 2, data: [] };

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.postService.posts().subscribe(
      res => {
        this.collection.data = res.post;
        this.config.totalItems = Object.keys(this.collection.data).length;
      }
    );
  }
  /**
   * Function for delete a post
   * @param id
   */
  deletePost(id) {
    this.postService.deletePost(id);
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
