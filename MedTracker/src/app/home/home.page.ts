import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  inRangeVCM: boolean= false;

  constructor(private activerouter: ActivatedRoute, private router: Router) {  }

  ngAfterViewInit(){

  }
}
