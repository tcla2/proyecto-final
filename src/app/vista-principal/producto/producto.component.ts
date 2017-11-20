import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent{
  producto:any = undefined;
  cod:any = undefined;

  constructor(private route:ActivatedRoute,
              private productService:ProductosService) {

      route.params.subscribe( parametros => {
        productService.getProducto( parametros['id'])
        .subscribe( res => {
          this.cod = parametros['id'];
          this.producto = res.json();
        })
      })
  }

}
