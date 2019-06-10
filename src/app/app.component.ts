import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'kaizel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
   $('.main-class').css("min-height",$(window).height()-50);
  }

}
