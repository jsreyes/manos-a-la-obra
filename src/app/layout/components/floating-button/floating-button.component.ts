import { Component, OnInit, AfterViewInit } from '@angular/core';
import M from '../../../../../node_modules/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss']
})
export class FloatingButtonComponent implements OnInit, AfterViewInit {

  options = {
    height: 450,
    duration: 500
   };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.fixed-action-btn');
    const instances = M.FloatingActionButton.init(elems, this.options);
  }


}
