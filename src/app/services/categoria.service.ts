import { Categoria } from './../model/categoria.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get<Categoria[]>("categoria/categorias");
  }

  getCategoriaById(id: number){
    return this.http.get<Categoria>("categoria/categoriaById/" + id);
  }

  salvaCategoria(categoria: Categoria){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.post<Categoria>("categoria/salvaCategoria", categoria, {headers});
  }

  atualizaCategoria(categoria: Categoria){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.put<Categoria>("categoria/atualizaCategoria", categoria, {headers});
  }

  deleteCategoriaById(id: number){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.delete<String>("categoria/deleteCategoriaById/" + id, {headers});
  }

  eventoSelecao: EventEmitter<number> = new EventEmitter();
  enviarCategoria(id: number){
    this.eventoSelecao.emit(id);
  }
}
