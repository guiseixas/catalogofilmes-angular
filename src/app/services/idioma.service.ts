import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idioma } from '../model/idioma.model';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  constructor(private http: HttpClient) { }

  getIdiomas(){
    return this.http.get<Idioma[]>("idioma/idiomas");
  }

  getIdiomaById(id: number){
    return this.http.get<Idioma>("idioma/idiomaById/" + id);
  }

  salvaIdioma(idioma: Idioma){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.post<Idioma>("idioma/salvaIdioma", idioma, {headers});
  }

  atualizaIdioma(idioma: Idioma){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.put<Idioma>("idioma/atualizaIdioma", idioma, {headers});
  }

  deleteIdiomaById(id: number){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.delete<Idioma>("idioma/deleteIdiomaById/" + id), {headers};
  }

}
