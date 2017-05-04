import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
@Component({
  selector: 'formDialog',
  templateUrl: '../templates/dialog.component.html'
})

export class AddDialogComponent {
  some : string = "i am add"
  constructor(public dialogRef: MdDialogRef<AddDialogComponent>) {}
}