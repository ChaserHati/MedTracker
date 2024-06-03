import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string="";
  constructor(private router: Router) {   }

  ngOnInit() {
  }

  enviarDatos(){
    let navigationExtras: NavigationExtras = {
      state: {
        username: this.username,
      }
    }
    this.router.navigate(['/user'], navigationExtras);
  }
}


