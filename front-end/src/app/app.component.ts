import { Component } from '@angular/core';
import { Usuario } from './model/usuario';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SGCM';

  constructor(
    private servicoLogin: LoginService
  ) {}

  isAutenticado(): boolean {
    return this.servicoLogin.isAutenticado();
  }

  isAdmin(): boolean {
    return this.servicoLogin.isAdmin();
  }

  getUsuario(): Usuario {
    return this.servicoLogin.getUsuario();
  }

  logout(): void {
    this.servicoLogin.logout();
  }
  
}
