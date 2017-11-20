import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css'],
  providers: [ DataService ]
})
export class CatalogoProductosComponent implements OnInit {
  private productos:any = [];
  private cantidadProductos:any = '';
  private productoJSON:any;
  private subtotal:number;
  private unidadDisponible:number;

  constructor(private dataService: DataService,
              public router:Router,
              public productService: ProductosService) {
    this.getProductos();
  }

  ngOnInit() {
  }



// Se obtienen todos los productos del service
  getProductos(){
    this.dataService.getProducts().then((data)=>{
      this.productos = data["products"];
    });
  }



// Productos agregados al carrito
  agregarCarrito(producto, cantidad){

    // Se muestra la cantidad de productos anhadidos sobre el icon del carrito
    this.cantidadProductos = document.getElementById('badge').textContent;
    document.getElementById("badge").innerHTML  = String(Number(this.cantidadProductos) + 1);

    // se envia al servicio los productos anhadidos, se calcula subtotal
    this.subtotal = producto.precio * cantidad;
    this.unidadDisponible = producto.unidad_disponible - cantidad;
    document.getElementById("unidadDisponible-"+producto.cod).innerHTML = String(Number(this.unidadDisponible));

    this.productoJSON = {
      producto : producto,
      cantidad : cantidad,
      subtotal : this.subtotal
    }

    this.productService.cargarCarrito(this.productoJSON);

  }

}
