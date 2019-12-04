import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';
import { config } from 'src/app/shared/config/app.config';
import { ActivatedRoute, Router } from '@angular/router';

// Directives


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  private subscription: Subscription;
  editPostForm: FormGroup;
  public maxTitle  = config.validations.maxLength80;
  public maxDescription  = config.validations.maxLength250;
  post: any;
  constructor(private postService: PostService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editPostForm = new FormGroup({
        _id:new FormControl(),
        title: new FormControl(config.blank, [Validators.required]),
        description: new FormControl(config.blank, [Validators.required])
    });
    this.postService.getPost(this.route.snapshot.params['id']).subscribe(
      data => {
        this.editPostForm.patchValue(data.post);
      }
    );
  }

  /**
   * Function for edit a post
   * @param id
   */
  updatePost(form: FormGroup) {
    this.postService.editPost(form);
  }
}
