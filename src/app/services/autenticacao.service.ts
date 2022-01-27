import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }
    autenticar(emailUsuario: string, senhaUsuario: string): Observable<any>{
      return this.httpClient.post('auth', {
        email: emailUsuario,
        senha: senhaUsuario
      })
    }
}
