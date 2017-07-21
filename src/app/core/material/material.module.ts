/*
 * This is a collection module for the different type
 * of material design elements. If you need any
 * other elements then you need to add them here.
 * This will be passed on through the core module.
 */

import { NgModule} from '@angular/core';
import { MdButtonModule,
         MdCheckboxModule,
         MdIconModule,
         MdCardModule,
         MdTabsModule,
         MdInputModule,
         MdNativeDateModule,
         MdDatepickerModule,
         MdRadioModule,
         MdSelectModule,
         MdSliderModule,
         MdSlideToggleModule,
         MdMenuModule,
         MdToolbarModule,
         MdButtonToggleModule,
         MdProgressSpinnerModule,
         MdProgressBarModule,
         MdDialogModule,
         MdTooltipModule,
         MdSnackBarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdButtonModule, MdCheckboxModule,
        MdIconModule, MdCardModule, MdTabsModule,
        MdInputModule, MdDatepickerModule,
        MdNativeDateModule, MdRadioModule,
        MdSelectModule, MdSliderModule,
        MdSlideToggleModule, MdMenuModule,
        MdToolbarModule, MdButtonToggleModule,
        MdProgressSpinnerModule, MdProgressBarModule,
        MdDialogModule, MdTooltipModule,
        MdSnackBarModule
    ],
    exports: [
        MdButtonModule, MdCheckboxModule,
        MdIconModule, MdCardModule, MdTabsModule,
        MdInputModule, MdDatepickerModule,
        MdRadioModule, MdSelectModule,
        MdSliderModule, MdSlideToggleModule,
        MdMenuModule, MdToolbarModule,
        MdButtonToggleModule, MdProgressSpinnerModule,
        MdProgressBarModule, MdDialogModule,
        MdTooltipModule, MdSnackBarModule
    ]
})
export class MaterialModule { }
