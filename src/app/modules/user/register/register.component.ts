import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { config } from '../../../shared/config/app.config';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  charMaxLength = config.validations.maxLength80;
  passwordMinLength = config.validations.minLenght8;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(config.blank, [Validators.required, Validators.pattern(config.validations.charRegex)]),
      email: new FormControl(config.blank, [Validators.required, Validators.email, Validators.pattern(config.validations.emailRegex)]),
      password: new FormControl(config.blank, [Validators.required, Validators.pattern(config.validations.pwdRegex)]),
    });
  }
  /**
   * Function for user sign up
   * @param form : FormGroup
   */
  register(form: FormGroup) {
    this.userService.signUpUser(form);
  }
}
