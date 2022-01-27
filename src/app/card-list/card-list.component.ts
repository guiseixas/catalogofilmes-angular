import { CategoriaService } from './../services/categoria.service';
import { Component, OnInit } from '@angular/core';

import { Filme } from '../model/filme.model';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  listaFilmes!: Filme[];

  constructor(private filmeService: FilmeService, private categoriaService: CategoriaService) {
    this.categoriaService.eventoSelecao.subscribe(id => {
            if(id == 0){
              this.getFilmes();
            }else{
              this.filmeService.getFilmesByCategoria(id).subscribe(data =>{
              this.listaFilmes = data;
            })
          }
    });
    this.filmeService.eventoFilmeByName.subscribe(titulo => {
        if(titulo == ""){
          this.getFilmes();
        }else{
          this.filmeService.getFilmeByTitulo(titulo).subscribe(data => {
            this.listaFilmes = data;
          })
        }
    });
  }

  ngOnInit(): void {
    this.getFilmes();
  }

  getFilmes(){
    this.filmeService.getFilmes().subscribe(data=>{
      this.listaFilmes = data;
    })
  }

}
