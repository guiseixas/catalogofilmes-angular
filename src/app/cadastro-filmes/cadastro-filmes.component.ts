import { FilmeService } from './../services/filme.service';
import { CategoriaService } from './../services/categoria.service';
import { IdiomaService } from './../services/idioma.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Idioma } from '../model/idioma.model';
import { Categoria } from '../model/categoria.model';
import { Filme } from './../model/filme.model';
import { ActivatedRoute, Router } from '@angular/router';

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

  idFilme!: number;

  constructor(
    private idiomaService: IdiomaService,
    private categoriaService: CategoriaService,
    private filmeService: FilmeService,
    private route: ActivatedRoute,
    private router: Router
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
          this.idFilme = id;
          this.filme = data;
          this.patchMovie(this.idFilme);
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

  patchMovie(id: number){
    this.filmeService.getFilmeById(id).subscribe(data => {
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

  deleteFilme(){
    console.log(this.idFilme);
    if(this.idFilme != null){
      this.filmeService.deleteFilmeById(this.idFilme).subscribe(data =>{
        console.log(data);
      });
    }
  }

  onSubmit(){
    this.filme = this.formFilme.value;
    if(this.idFilme != null){
      this.filme.id = this.idFilme;
      this.filmeService.atualizaFilme(this.filme).subscribe(data =>{
        this.router.navigate(['']);
      });
    }else{
      this.filmeService.salvaFilme(this.filme).subscribe(data =>{
        this.router.navigate(['']);
      });
      }
  }
}
