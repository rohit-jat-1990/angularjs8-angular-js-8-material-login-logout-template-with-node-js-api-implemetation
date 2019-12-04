import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from '../../shared/config/app.config';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewPostComponent } from './view-post/view-post.component';


const routePaths = config['routePaths'];
const routes: Routes = [

  {
    path: routePaths.posts,
    component: PostsComponent
  },
  {
    path: routePaths.addPost,
    component: AddPostComponent
  },
  {
    path: routePaths.editPostView,
    component: EditPostComponent
  }
  ,
  {
    path: routePaths.postView,
    component: ViewPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }