import { NgModule } from '@angular/core'
import {
  MdButtonModule,
  MdGridListModule,
  MdCardModule,
  MdDialogModule,
  MdInputModule,
} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdGridListModule, MdCardModule, MdDialogModule, MdInputModule],
  exports: [MdButtonModule, MdGridListModule, MdCardModule, MdDialogModule, MdInputModule]
})

export class MaterialModule { }