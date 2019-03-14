import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { coreClass } from '../coreClass';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  core = new coreClass(34, "universe", null, 7, 8);

  constructor() {
  }

  ngOnInit() {

    //this works in ngOnInit but not below
    $('button').on('click', function () {
      alert("Button Clicked");
    });

  }

  myFunction(): any {
    return this.core.optionals();
  }

}
