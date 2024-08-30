import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userLg: string = " "; 

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

  ngOnInit() {
  }

  

}
