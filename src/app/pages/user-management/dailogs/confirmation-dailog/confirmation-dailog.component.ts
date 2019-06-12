import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'kaizel-confirmation-dailog',
  templateUrl: './confirmation-dailog.component.html',
  styleUrls: ['./confirmation-dailog.component.scss']
})
export class ConfirmationDailogComponent implements OnInit {

  message;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.message=this.data.message;
  }

}
