import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from  './services/http.service';
import { LogService } from './services/log.service';
import { DataService } from './services/data.service';
import { ProductosService } from './services/productos.service';

import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { BarraNavegacionComponent } from './vista-principal/barra-navegacion/barra-navegacion.component';
import { CatalogoProductosComponent } from './vista-principal/catalogo-productos/catalogo-productos.component';

import { AppRoutingModule } from './app-routing.module';
import { ProductoComponent } from './vista-principal/producto/producto.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { CarritoComprasComponent } from './vista-principal/carrito-compras/carrito-compras.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VistaPrincipalComponent,
    BarraNavegacionComponent,
    CatalogoProductosComponent,
    ProductoComponent,
    SearchFilterPipe,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LogService, HttpService, DataService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
