import { Component, ElementRef, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';
import { AnimationController, IonTabButton } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent  implements AfterViewInit {

  currentPage: string = "/"

  constructor(private router: Router) { 
    this.router.events.subscribe((e)=>{
      if(e instanceof NavigationEnd){
        this.currentPage = e.url;
      }
    }

    )
  }

  ngOnInit() {}

  ngAfterViewInit(){
  }
}
