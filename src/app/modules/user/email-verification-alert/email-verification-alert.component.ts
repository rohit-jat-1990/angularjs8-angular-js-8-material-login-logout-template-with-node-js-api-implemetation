import { Component, OnInit } from '@angular/core';
import { config } from '../../../shared/config/app.config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-verification-alert',
  templateUrl: './email-verification-alert.component.html',
  styleUrls: ['./email-verification-alert.component.css']
})
export class EmailVerificationAlertComponent implements OnInit {
  emailForVerificationMessage: string;
  signInUrl = `${config.routePaths['rootUrl']}${config.routePaths['signin']}`;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.emailForVerificationMessage = params.get('email');
    });
  }

}
