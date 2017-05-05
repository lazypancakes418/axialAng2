import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { EditFormService } from '../services/edit-form.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'formDialog',
  templateUrl: '../templates/dialog.component.html',
  providers: [EditFormService]
})

export class EditDialogComponent {
  summer: string = "i am edit"
  subscription: Subscription;
  constructor(public dialogRef: MdDialogRef<EditDialogComponent>
    , private formService: EditFormService) {
    this.subscription = formService.some.subscribe((str: string) => {
      this.summer = str
    })
  }
}