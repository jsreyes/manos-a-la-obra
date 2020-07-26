import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-catalogue',
  templateUrl: './main-catalogue.component.html',
  styleUrls: ['./main-catalogue.component.scss']
})
export class MainCatalogueComponent implements OnInit {

  showFloor = false;
  showGarden = false;
  showBlackouts = false;
  showFakeSky = false;
  showWall = false;
  showGrass = false;

  constructor() { }

  ngOnInit() {
  }

}
