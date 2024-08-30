import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userLg: string = " "; 

  userF: string = " ";



  constructor(private router: Router, private activedroute: ActivatedRoute) { 
    //realizar la captura de la informacion que viene por navigationExtras
    this.activedroute.queryParams.subscribe(param =>{
      //validamos si viene o no información
      if(this.router.getCurrentNavigation()?.extras.state){
        //capturamos la informacion
        this.userLg = this.router.getCurrentNavigation()?.extras?.state?.['userconect'];
      }
    });
  }

  ngOnInit(){
    this.userF = this.userLg;
  }

 

  cerrarSesion(){
    let navigationextras: NavigationExtras = {
      state:{
        userconect: " "
      }
    };
    
    this.userF = " ";
    this.router.navigate(['/login'], navigationextras);
  }



  

  

}
