/*
 * This components create a new snackbar element.
 * This can be used for messages to the user.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'snackbar-basic',
    template: `<span class="example-pizza-party" style="color: white">
                  🍕🍕🍕🍕🍕 Pizza party!!! 🍕🍕🍕🍕🍕
                </span>`
})
export class SnackbarComponent { }
