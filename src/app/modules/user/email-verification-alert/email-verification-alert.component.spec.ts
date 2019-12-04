import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificationAlertComponent } from './email-verification-alert.component';

describe('EmailVerificationAlertComponent', () => {
  let component: EmailVerificationAlertComponent;
  let fixture: ComponentFixture<EmailVerificationAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailVerificationAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerificationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
