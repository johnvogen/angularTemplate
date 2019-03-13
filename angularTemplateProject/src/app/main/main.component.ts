import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Greeter } from '../greeter';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  greeter = new Greeter(34, "universe", 78,7,8,9);

  constructor() {
  }

  ngOnInit() {
  }

  myFunction():any {
    return this.greeter.optionals();

  }

}
