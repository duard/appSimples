import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class BackendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const body = document.getElementsByTagName('body')[0];
    // body.classList.remove('nav-md');   // remove the class
    // body.classList.add('nav-md');   // add the class
  }
}


