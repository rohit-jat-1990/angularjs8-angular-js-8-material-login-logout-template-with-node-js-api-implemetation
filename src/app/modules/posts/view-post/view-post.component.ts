import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  private subscription: Subscription;
  constructor(private postService:PostService, private route: ActivatedRoute) { }
  post: any;
  ngOnInit() {
    this.postService.getPost(this.route.snapshot.params['id']).subscribe(
      data => {
        this.post = data.post;
      }
    );
  }

}
