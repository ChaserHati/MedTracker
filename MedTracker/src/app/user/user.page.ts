import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public fechnac!: string;
  fechnacFormateada!: string;
  username!: string;
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
    this.username=String(localStorage.getItem('user'));
    this.height=Number(localStorage.getItem('height'));
    this.weight=Number(localStorage.getItem('weight'));
    if(localStorage.getItem('fechnac')!=null){
      this.fechnac=String(localStorage.getItem('fechnac'));
    }
    
  }
  processFecha(){
    this.fechnacFormateada = this.fechnac.split('T')[0];
  }
  guardarStorage(){
    localStorage.setItem('weight',String(this.weight));
    localStorage.setItem('height',String(this.height));
    localStorage.setItem('fechnac',this.fechnacFormateada);
  }
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
