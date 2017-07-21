/*
 * This components create a new dialog element.
 * This can be used for messages to the user.
 */

import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'dialog-basic',
    template: `<h1 md-dialog-title>Dialog</h1>
    <div md-dialog-content>What would you like to do?</div>
    <div md-dialog-actions>
        <button md-raised-button color="primary" md-dialog-close="Option 1">Option 1</button>
        <button md-raised-button color="accent" md-dialog-close="Option 2">Option 2</button>
    </div>`,
})
export class DialogComponent {
    constructor(public dialogRef: MdDialogRef<DialogComponent>) { }
}
