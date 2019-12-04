import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from './shared/config/app.config';
import { AuthGuard } from './services/auth-guards.service';
const routePaths = config['routePaths'];

const routes: Routes = [
  {
    path: routePaths.root,
    loadChildren: './modules/user/user.module#UserModule',
    canActivate: [AuthGuard]
  },
  {
    path: routePaths.posts,
    loadChildren: './modules/posts/post.module#PostModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }