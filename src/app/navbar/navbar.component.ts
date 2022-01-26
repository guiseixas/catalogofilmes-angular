import { FilmeService } from './../services/filme.service';
import { CategoriaService } from './../services/categoria.service';
import { Categoria } from './../model/categoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  route = location.pathname;
  contrast: boolean = false;

  constructor(private categoriaService: CategoriaService, private filmeService: FilmeService) { }

  listaCategorias!: Categoria[];
  tituloFilme!: string;

  ngOnInit(): void {
    this.buscarCategorias();
  }

  selecionarCategoria(id: any){
    this.categoriaService.enviarCategoria(id);
  }

  buscarCategorias(){
    this.categoriaService.getCategorias().subscribe(data => {
      this.listaCategorias = data;
    });
  }

  selecionarFilmeByName(titulo: any){
    this.filmeService.enviarFilmeByName(titulo.value);
  }

  highContrast(){
    if(!this.contrast){
      document.body.classList.add('high-contrast');
    }else{
      document.body.classList.remove('high-contrast');
    }
    this.contrast = !this.contrast;
  }
}
