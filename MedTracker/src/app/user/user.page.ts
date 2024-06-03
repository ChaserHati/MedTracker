import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  username: string = "";
  height!: number;
  weight!: number;

  constructor(private activerouter: ActivatedRoute,private router: Router) {
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){
        this.username= this.router.getCurrentNavigation()?.extras?.state?.['username'];
   }
  })
}
  
  ngOnInit() {
  }
  cerrarSesion(){
    this.username = "";
    this.router.navigate(['/']);
  }
}
