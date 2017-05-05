import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
@Component({
  selector: 'formsDialog',
  templateUrl: '../templates/dialog.component.html'
})

export class AddDialogComponent {
  constructor(public dialogRef: MdDialogRef<AddDialogComponent>) {}
}