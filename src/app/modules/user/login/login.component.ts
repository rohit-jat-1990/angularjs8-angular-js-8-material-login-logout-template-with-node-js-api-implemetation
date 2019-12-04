import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { config } from '../../../shared/config/app.config';
import { UserService } from '../services/user.service';
import { CookieeManagerService } from '../../../services/cookiee-manager.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordMinLength = config.validations.minLenght8;
  constructor(private userService: UserService, private cookieService: CookieeManagerService) { }
  @Input() active: string;

  ngOnInit() {
    this.active = this.active ? this.active.toLowerCase() : this.active;
    this.loginForm = new FormGroup({
      email: new FormControl(config.blank, [Validators.required, Validators.email, Validators.pattern(config.validations.emailRegex)]),
      password: new FormControl(config.blank, [Validators.required, Validators.pattern(config.validations.pwdRegex)]),
    });
    const userString = this.cookieService.getCookie('currentUser');
    const user = (userString && JSON.parse(userString) ? JSON.parse(userString) : undefined);
    this.active = user.id !== '' ? 'active' : '';
  }
  /**
   * Function for user login
   * @param form : FormGroup
   */
  login(form: FormGroup) {
    this.userService.signInUser(form);
  }

}
