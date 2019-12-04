import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { config } from '../../../shared/config/app.config';
import { UserService } from '../services/user.service';
import { UploadService } from '../services/upload.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editForm: FormGroup;
  charMaxLength = config.validations.maxLength80;
  private subscription: Subscription;
  public profileData: any;
  public res;

  constructor(private userService: UserService, private uploadService:UploadService) {
      this.userService.number.subscribe((x) => {
      this.res = x;
      });
  }


  ngOnInit() {
    this.userService.number.next(500);

    this.editForm = new FormGroup({
      name: new FormControl(config.blank, [Validators.required]),
      email: new FormControl(config.blank, [Validators.required, Validators.email, Validators.pattern(config.validations.emailRegex)])
    });

    this.subscription = this.userService.me().subscribe(
      res => {
        this.profileData = res;
      });
  }
  /**
   * Function for update profile
   * @param form : FormGroup
   */
  updateProfile(form: FormGroup) {
    this.userService.updateProfile(form);
  }
  onFileChanged(event) {
    this.uploadService.uploadImage(event.target.files[0]);
  }
}
