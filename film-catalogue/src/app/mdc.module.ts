import { NgModule } from '@angular/core';

import {
  MdcThemeModule,
  MdcButtonModule,
  MdcCardModule,
  MdcCheckboxModule,
  MdcDrawerModule,
  MdcFormFieldModule,
  MdcIconModule,
  MdcListModule,
  MdcTextFieldModule,
  MdcToolbarModule
} from '@angular-mdc/web';

@NgModule({
  exports: [
    MdcThemeModule,
    MdcButtonModule,
    MdcCardModule,
    MdcCheckboxModule,
    MdcDrawerModule,
    MdcFormFieldModule,
    MdcIconModule,
    MdcListModule,
    MdcTextFieldModule,
    MdcToolbarModule
  ]
})
export class MdcModule { }
