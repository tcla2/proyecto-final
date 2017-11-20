import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent {
  productosCarritoJSON:any;
  
  constructor(public productService:ProductosService) {

    //Se obtienen los productos que fueron agregados al carrito
    this.productosCarritoJSON = this.productService.obtenerCarrito();

  }

  //Se invoca al servicio para la actualizacion stock de los productos
  actualizarProducto(productosCarritoJSON){
    this.productService.actualizarProducto(productosCarritoJSON);
  }

}
