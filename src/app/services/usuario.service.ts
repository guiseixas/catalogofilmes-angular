import { Usuario } from './../model/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get<Usuario[]>("usuario/usuarios");
  }

  getUsuarioById(id: number){
    return this.http.get<Usuario>("usuario/usuarioById/" + id);
  }

  salvaUsuario(usuario: Usuario){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.post<Usuario>("usuario/salvaUsuario", usuario, {headers});
  }

  atualizaUsuario(usuario: Usuario){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.post<Usuario>("usuario/atualizaUsuario", usuario, {headers});
  }

  deleteUsuarioById(id: number){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.delete<String>("usuario/deleteUsuarioById/" + id, {headers});
  }
}
