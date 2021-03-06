import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import M from '../../../../../node_modules/materialize-css/dist/js/materialize.min.js';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  public url: string;
  options = {
    height: 450,
    duration: 500
   };

  constructor(public router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.slider');
    const instances = M.Slider.init(elems, this.options);
  }

  // prev() {
  //   this.carouselActions.emit({ action: 'carousel', params: ['prev']});
  // }

  // next() {
  //   this.carouselActions.emit({ action: 'carousel', params: ['next']});
  // }

}
