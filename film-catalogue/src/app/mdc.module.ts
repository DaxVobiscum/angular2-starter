import { NgModule } from '@angular/core';

import {
  MdcThemeModule,
  MdcCardModule,
  MdcCheckboxModule,
  MdcDrawerModule,
  MdcFormFieldModule,
  MdcIconModule,
  MdcListModule,
  MdcToolbarModule
} from '@angular-mdc/web';

@NgModule({
  exports: [
    MdcThemeModule,
    MdcCardModule,
    MdcCheckboxModule,
    MdcDrawerModule,
    MdcFormFieldModule,
    MdcIconModule,
    MdcListModule,
    MdcToolbarModule
  ]
})
export class MdcModule { }
