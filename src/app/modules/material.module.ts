import { NgModule } from '@angular/core'
import {
  MdButtonModule,
  MdGridListModule,
  MdCardModule,
  MdDialogModule
} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdGridListModule, MdCardModule, MdDialogModule],
  exports: [MdButtonModule, MdGridListModule, MdCardModule, MdDialogModule]
})

export class MaterialModule { }