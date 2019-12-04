import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { config } from 'src/app/shared/config/app.config';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  public maxTitle  = config.validations.maxLength80;
  public maxDescription  = config.validations.maxLength250;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.addPostForm = new FormGroup({
        title: new FormControl(config.blank, [Validators.required]),
        description: new FormControl(config.blank, [Validators.required])
    });
  }

  /**
   * Function for add post
   * @param form : FormGroup
   */
  savePost(form: FormGroup) {
    this.postService.addPost(form);
  }

}
