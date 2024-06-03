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
  @ViewChildren(IonTabButton, {read: ElementRef}) tabButtons: QueryList<ElementRef<HTMLIonTabButtonElement>> | any;

  currentPage: string = "/"

  private animationA!: Animation;
  private animationB!: Animation;
  private animationC!: Animation;
  private animationD!: Animation;

  constructor(private router: Router, private animationCtrl: AnimationController) { 
    this.router.events.subscribe((e)=>{
      if(e instanceof NavigationEnd){
        this.currentPage = e.url;
      }
    }

    )
  }

  ngOnInit() {}

  ngAfterViewInit(){

    setTimeout(() => {
      this.animationA = this.animationCtrl.create().addElement(this.tabButtons.get(0).nativeElement).duration(500).iterations(1).
    keyframes([
      { offset: 0, transform: 'translate(0px)'},
      { offset: 0.33, transform: 'translate(10px)'},
      { offset: 0.66, transform: 'translate(-10px)'},
      { offset: 1, transform: 'translate(0px)'}
    ]);
    this.animationB = this.animationCtrl.create().addElement(this.tabButtons.get(1).nativeElement).duration(500).iterations(1).
    keyframes([
      { offset: 0, transform: 'translate(0px)'},
      { offset: 0.33, transform: 'translate(10px)'},
      { offset: 0.66, transform: 'translate(-10px)'},
      { offset: 1, transform: 'translate(0px)'}
    ]);
    this.animationC = this.animationCtrl.create().addElement(this.tabButtons.get(2).nativeElement).duration(500).iterations(1).
    keyframes([
      { offset: 0, transform: 'translate(0px)'},
      { offset: 0.33, transform: 'translate(10px)'},
      { offset: 0.66, transform: 'translate(-10px)'},
      { offset: 1, transform: 'translate(0px)'}
    ]);
    this.animationD = this.animationCtrl.create().addElement(this.tabButtons.get(3).nativeElement).duration(500).iterations(1).
    keyframes([
      { offset: 0, transform: 'translate(0px)'},
      { offset: 0.33, transform: 'translate(10px)'},
      { offset: 0.66, transform: 'translate(-10px)'},
      { offset: 1, transform: 'translate(0px)'}
    ]);
    }, 1000);

    
  }

  playA(){
    this.animationA.play();
  }
  playB(){
    this.animationB.play();
  }
  playC(){
    this.animationC.play();
  }
  playD(){
    this.animationD.play();
  }
}
