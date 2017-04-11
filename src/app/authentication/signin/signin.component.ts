import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login');   // remove the class
    body.classList.add('login');   // add the class
  }

}
