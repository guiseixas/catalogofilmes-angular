import { IdiomaService } from './../services/idioma.service';
import { CategoriaService } from './../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from '../model/categoria.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Idioma } from '../model/idioma.model';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.scss']
})
export class CadastroCategoriaComponent implements OnInit {

  formCategoria!: FormGroup;

  categoria!: Categoria;

  idCategoria!: number;

  idiomas!: Idioma[];

  constructor(private categoriaService: CategoriaService, private route: ActivatedRoute, private idiomaService: IdiomaService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.idiomaService.getIdiomas().subscribe(data => {
      this.idiomas = data;
    });
    this.route.params.subscribe(params => {
      let id = params['id']
      if(id != null){
        this.categoriaService.getCategoriaById(+id).subscribe(data => {
          this.idCategoria = id;
          this.categoria = data;
          this.patchUsuario(this.idCategoria);
        });
      }
    });
  }

  createForm(){
    this.formCategoria = new FormGroup({
      nome: new FormControl(null),
      tag: new FormControl(null),
      idioma: new FormControl(null)
    })
  }

  patchUsuario(id: number){
    this.categoriaService.getCategoriaById(id).subscribe(data => {
      this.formCategoria.patchValue({
        nome: data.nome,
        tag: data.tag
      });
    });
  }

  deleteCategoria(){
    if(this.idCategoria != null){
      this.categoriaService.deleteCategoriaById(this.idCategoria).subscribe(data => {
      });
    }
  }

  onSubmit(){
    this.categoria = this.formCategoria.value;
    if(this.idCategoria != null){
      this.categoria.id = this.idCategoria;
      this.categoriaService.atualizaCategoria(this.categoria).subscribe(data => {
      });
    }else{
      this.categoriaService.salvaCategoria(this.categoria).subscribe(data =>{
      });
    }
  }
}
