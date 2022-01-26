import { IdiomaService } from './../services/idioma.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Idioma } from '../model/idioma.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-idioma',
  templateUrl: './cadastro-idioma.component.html',
  styleUrls: ['./cadastro-idioma.component.scss']
})
export class CadastroIdiomaComponent implements OnInit {

  formIdioma!: FormGroup;

  idioma!: Idioma;

  idIdioma!: number;

  constructor(private idiomaService: IdiomaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.route.params.subscribe(params => {
      let id = params['id']
      if(id != null){
        this.idiomaService.getIdiomaById(+id).subscribe(data => {
          this.idIdioma = id;
          this.idioma = data;
          this.patchIdioma(this.idIdioma);
        });
      }
    });
  }

  createForm(){
    this.formIdioma = new FormGroup({
      nome: new FormControl(null),
      tag: new FormControl(null)
    })
  }

  patchIdioma(id: number){
    this.idiomaService.getIdiomaById(id).subscribe(data => {
      this.formIdioma.patchValue({
        nome: data.nome,
        tag: data.tag
      });
    });
  }

  onSubmit(){
    this.idioma = this.formIdioma.value;
    if(this.idIdioma != null){
      this.idioma.id = this.idIdioma;
      this.idiomaService.atualizaIdioma(this.idioma).subscribe(data => {
        console.log(data);
      });
    }else{
      this.idiomaService.salvaIdioma(this.idioma).subscribe(data => {
        console.log(data);
      });
    }
  }

}
