import { FilmeService } from './../services/filme.service';
import { CategoriaService } from './../services/categoria.service';
import { IdiomaService } from './../services/idioma.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Idioma } from '../model/idioma.model';
import { Categoria } from '../model/categoria.model';
import { Filme } from './../model/filme.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  formFilme!: FormGroup;

  idiomas!: Idioma[];

  categorias!: Categoria[];

  filme!: Filme;

  constructor(
    private idiomaService: IdiomaService,
    private categoriaService: CategoriaService,
    private filmeService: FilmeService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.idiomaService.getIdiomas().subscribe(data => {
      this.idiomas = data;
    });
    this.categoriaService.getCategorias().subscribe(data =>{
      this.categorias = data;
    });
    this.route.params.subscribe( params => {
      let id = params['id']
      if(id != null){
        this.filmeService.getFilmeById(+id).subscribe(data => {
          this.filme = data;
          console.log(this.filme)
          this.updateMovie(this.filme);
        });
      }
    });
  }

  createForm(){
    this.formFilme = new FormGroup({
      titulo: new FormControl(null),
      sinopse: new FormControl(null),
      imagem: new FormControl(null),
      dataLancamento: new FormControl(null),
      duracao: new FormControl(null),
      idioma: new FormControl(null),
      categoria: new FormControl(null)
    })
  }

  updateMovie(filme: Filme){
    this.filmeService.atualizaFilme(filme).subscribe(data => {
      this.formFilme.patchValue({
        titulo: data.titulo,
        sinopse: data.sinopse,
        imagem: data.imagem,
        dataLancamento: data.dataLancamento,
        duracao: data.duracao,
        idioma: data.idioma,
        categoria: data.categoria
      });
    });
  }

  onSubmit(){
    this.filme = this.formFilme.value;
    this.filmeService.salvaFilme(this.filme).subscribe(data =>{
      this.filme = data;
    });
  }

}
