import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';

@Component({
  selector: 'vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})

export class VistaPrincipalComponent  {

  constructor(public dataService:DataService, public router:Router) {
      // this.router.navigate(['/catalogo-productos']);
  }
}
