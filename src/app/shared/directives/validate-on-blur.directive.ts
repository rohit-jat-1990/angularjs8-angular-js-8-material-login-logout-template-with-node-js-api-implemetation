import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidateOnBlur]'
})
export class ValidateOnBlurDirective {
  @Input('appValidateOnBlur') validateFormControl;

  constructor() { }
  @HostListener('focus', ['$event.target'])
  onFocus() {
    this.validateFormControl.markAsUntouched();
  }

  @HostListener('focusout', ['$event.target'])
  onFocusout() {
    this.validateFormControl.markAsTouched();
  }

}
