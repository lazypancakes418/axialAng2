import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'formDialog',
  templateUrl: '../templates/dialog.component.html'
})

export class EditDialogComponent {
  constructor(public dialogRef: MdDialogRef<EditDialogComponent>) {}
}