import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { EditFormService } from '../services/edit-form.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'formDialog',
  templateUrl: '../templates/dialog.component.html',
   styleUrls: ['../styles/dialog.component.css']
})

export class EditDialogComponent {
  headline: string;
  checkMin: number;
  checkMax: number;
  trMin: number;
  trMax: number;
  ebiMin: number;
  ebiMax: number;
  constructor(public dialogRef: MdDialogRef<EditDialogComponent>) {}
}