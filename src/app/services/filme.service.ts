import { Filme } from './../model/filme.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }

  getFilmes(){
    return this.http.get<Filme[]>('filme/filmes');
  }

  getFilmeById(id: number){
    return this.http.get<Filme>('filme/filmeById/' + id);
  }

  getFilmeByTitulo(tituloFilme: string){
    return this.http.get<Filme[]>('filme/filmeBusca/' + tituloFilme);
  }

  getFilmesByCategoria(id: number){
    return this.http.get<Filme[]>('filme/getFilmesByCategoria/' + id);
  }

  salvaFilme(filme: Filme){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.post<Filme>('filme/salvaFilme', filme, {headers});
  }

  atualizaFilme(filme: Filme){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.put<Filme>("filme/atualizaFilme", filme, {headers});
  }

  deleteFilmeById(id: number){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.delete<String>('filme/deleteFilmeById/' + id, {headers});
  }

  eventoFilmeByName: EventEmitter<any> = new EventEmitter();

  enviarFilmeByName(titulo: string | null){
    this.eventoFilmeByName.emit(titulo);
  }
}
