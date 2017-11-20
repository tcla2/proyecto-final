import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { SearchFilterPipe } from './search-filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  imageLogin = true;
  // urlSegments[1] = this.lang;
}
