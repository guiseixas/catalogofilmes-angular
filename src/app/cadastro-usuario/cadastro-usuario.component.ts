import { IdiomaService } from './../services/idioma.service';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Idioma } from '../model/idioma.model';
import { Usuario } from '../model/usuario.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  formUsuario!: FormGroup;

  idiomas!: Idioma[];

  usuario!: Usuario;

  idUsuario!: number;

  constructor(private usuarioService: UsuarioService, private idiomaService: IdiomaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.idiomaService.getIdiomas().subscribe(data => {
      this.idiomas = data;
    });
    this.route.params.subscribe(params => {
      let id = params['id']
      if(id != null){
        this.usuarioService.getUsuarioById(+id).subscribe(data => {
          this.idUsuario = id;
          this.usuario = data;
          this.patchUsuario(this.idUsuario);
        });
      }
    });
  }

  createForm(){
    this.formUsuario = new FormGroup({
      nome: new FormControl(null),
      cpf: new FormControl(null),
      telefone: new FormControl(null),
      email: new FormControl(null),
      senha: new FormControl(null),
      idioma: new FormControl(null)
    })
  }

  patchUsuario(id: number){
    this.usuarioService.getUsuarioById(id).subscribe(data => {
      this.formUsuario.patchValue({
        nome: data.nome,
        cpf: data.cpf,
        telefone: data.telefone,
        email: data.email,
        senha: data.senha,
        idioma: data.idioma
      });
    });
  }

  onSubmit(){
    this.usuario = this.formUsuario.value;
    if(this.idUsuario != null){
      this.usuario.id = this.idUsuario;
      this.usuarioService.atualizaUsuario(this.usuario).subscribe(data => {
        console.log(data);
      });
    }else{
      this.usuarioService.salvaUsuario(this.usuario).subscribe(data =>{
        this.usuario = data;
      });
    }
  }
}
