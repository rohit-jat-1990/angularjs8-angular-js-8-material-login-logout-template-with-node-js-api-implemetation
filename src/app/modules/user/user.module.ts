import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { UsersRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';

// Components
import { RegisterComponent } from './register/register.component';

// Services
import { UserService } from '../../modules/user/services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AngularMaterialModule} from 'src/app/angular-material.module';
import { EmailVerificationAlertComponent } from './email-verification-alert/email-verification-alert.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    EmailVerificationAlertComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [UserService]
})
export class UserModule { }
