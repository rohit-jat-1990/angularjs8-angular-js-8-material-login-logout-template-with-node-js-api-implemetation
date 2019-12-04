import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { PostsRoutingModule } from './post-routing.module';
import { SharedModule } from '../../shared/shared.module';

// Services
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent,
    EditPostComponent,
    ViewPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: []
})
export class PostModule { }
