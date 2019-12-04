import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule } from '@angular/router';
import { NgxUploaderModule } from 'ngx-uploader';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Services
import { ApiCallService } from '../services/api-call.service';
import { SessionManagerService } from '../services/session-manager.service';
import { CookieeManagerService } from '../services/cookiee-manager.service';

// Components
import { SearchComponent } from './components/search/search.component';

// Directives
import { ValidateOnBlurDirective } from './directives/validate-on-blur.directive';


@NgModule({
  declarations: [
    SearchComponent,
    ValidateOnBlurDirective
],
  imports: [
    CommonModule,
    FlashMessagesModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxUploaderModule
  ],
  providers: [
    ApiCallService,
    SessionManagerService,
    CookieeManagerService,
    NgbActiveModal,
    DatePipe
  ],
  exports: [
    SearchComponent,
    FlashMessagesModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxUploaderModule,
    ValidateOnBlurDirective
    
  ],
  entryComponents: [],
})
export class SharedModule { }
