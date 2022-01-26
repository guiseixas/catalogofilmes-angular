import { CategoriaService } from './../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from '../model/categoria.model';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.scss']
})
export class CadastroCategoriaComponent implements OnInit {

  formCategoria!: FormGroup;

  categoria!: Categoria;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.formCategoria = new FormGroup({
      nome: new FormControl(null),
      tag: new FormControl(null)
    })
  }

  onSubmit(){
    this.categoria = this.formCategoria.value;
    this.categoriaService.salvaCategoria(this.categoria).subscribe(data => {
      this.categoria = data;
    });
  }

}
