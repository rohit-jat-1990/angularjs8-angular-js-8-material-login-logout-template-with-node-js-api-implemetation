import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from '../../shared/config/app.config';

// Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmailVerificationAlertComponent } from './email-verification-alert/email-verification-alert.component'
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routePaths = config['routePaths'];

const routes: Routes = [

  {
    path: routePaths.root,
    component: HomeComponent
  },
  {
    path: routePaths.signin,
    component: LoginComponent
  },
  {
    path: routePaths.signup,
    component: RegisterComponent
  },
  {
    path: `${routePaths.emailVerificationAlert}/:email`,
    component: EmailVerificationAlertComponent
  },
  {
    path: routePaths.editProfile,
    component: EditProfileComponent
  },
  {
    path: routePaths.profile,
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }