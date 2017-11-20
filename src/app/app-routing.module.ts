import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { ProductoComponent } from './vista-principal/producto/producto.component';
import { CarritoComprasComponent } from './vista-principal/carrito-compras/carrito-compras.component';
import { CatalogoProductosComponent } from './vista-principal/catalogo-productos/catalogo-productos.component';

const routes: Routes = [
   {path: '', component: LoginComponent},
   {path: 'vista-principal', component: VistaPrincipalComponent, children: [
     {path: '', redirectTo: 'catalogo-productos', pathMatch: 'full'},
     {path: 'catalogo-productos', component: CatalogoProductosComponent},
     {path: 'carrito-compras', component: CarritoComprasComponent},
     {path: 'producto/:id', component: ProductoComponent}
   ]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

export const app_routing = RouterModule.forRoot(routes, {useHash:true});
