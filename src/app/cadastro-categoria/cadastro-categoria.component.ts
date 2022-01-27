import { CategoriaService } from './../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from '../model/categoria.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.scss']
})
export class CadastroCategoriaComponent implements OnInit {

  formCategoria!: FormGroup;

  categoria!: Categoria;

  idCategoria!: number;

  constructor(private categoriaService: CategoriaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
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
      tag: new FormControl(null)
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

  onSubmit(){
    this.categoria = this.formCategoria.value;
    if(this.idCategoria != null){
      this.categoria.id = this.idCategoria;
      this.categoriaService.atualizaCategoria(this.categoria).subscribe(data => {
        console.log(data);
      });
    }else{
      this.categoriaService.salvaCategoria(this.categoria).subscribe(data =>{
        console.log(data);
      });
    }
  }
}
