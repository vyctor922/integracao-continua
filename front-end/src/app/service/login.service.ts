import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private autenticado: boolean = false;
  private usuario: Usuario = <Usuario>{};

  isAutenticado(): boolean {
    return this.autenticado;
  }

  isAdmin(): boolean {
    return this.usuario.papel == "ROLE_ADMIN";
  }

  getUsuario(): Usuario {
    return this.usuario;
  }

  login(usuario: Usuario): void {

    this.usuario = usuario;
    const credenciaisCodificadas = btoa(usuario.nomeUsuario + ':' + usuario.senha);
    const opcoesHttp = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + credenciaisCodificadas
      })
    };

    const url = environment.API_URL + '/user_info/';
    this.http.get<Usuario>(url, opcoesHttp).subscribe({
      next: (usuario: Usuario) => {
        if (usuario) {
          this.autenticado = true;
          this.usuario = usuario;
          sessionStorage.setItem('usuario', JSON.stringify(usuario));
          this.router.navigate(['/']);
        }
      }
    });
  }

  logout(): void {

    const url = environment.API_URL + '/logout';
    this.http.get(url).subscribe({
      complete: () => {
        this.autenticado = false;
        this.usuario = <Usuario>{};
        sessionStorage.removeItem('usuario');
        this.router.navigate(['/login']);
      }
    });

  }

  verificaLogin(): boolean {

    if (!this.isAutenticado()) {
      this.usuario = JSON.parse(
        sessionStorage.getItem('usuario') || '{}'
      );
      if (Object.keys(this.usuario).length > 0) {
        this.autenticado = true;
      } else {
        this.router.navigate(['/login']);
      }
      
    }

    return this.isAutenticado();

  }

}
