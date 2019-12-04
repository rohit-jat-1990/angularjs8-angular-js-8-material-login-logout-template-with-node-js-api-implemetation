import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SnackbarService } from 'ngx-snackbar';
import { config } from '../../../shared/config/app.config';

@Injectable({
    providedIn: 'root'
})
export class Flash {

    constructor(private _flashMessagesService: FlashMessagesService, private snackbarService: SnackbarService) { }

    showSuccess(message: string, timeout?: number) {
        timeout = timeout ? timeout : config.messagesTimeout;
        this._flashMessagesService.show(`<p>${message}</p>`, { cssClass: config.cssClasses.success, timeout: timeout });
    }

    showError(message: string, timeout?: number) {
        timeout = timeout ? timeout : config.messagesTimeout;
        this._flashMessagesService.show(`<p>${message}</p>`, { cssClass: config.cssClasses.error, timeout: timeout });
    }
    showSuccessBottom(message: string, timeout?: number) {
        this.snackbarService.add({
            msg: `<strong>${message}</strong>`,
            timeout: timeout ? timeout : config.messagesTimeout,
            background: '#fff6d6',
            color: '#af9539',
            action: {
                text: ''
            }
        });
    }

}
