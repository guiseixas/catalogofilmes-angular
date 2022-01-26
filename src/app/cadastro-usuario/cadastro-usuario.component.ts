import { IdiomaService } from './../services/idioma.service';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Idioma } from '../model/idioma.model';
import { Usuario } from '../model/usuario.model';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  formUsuario!: FormGroup;

  idiomas!: Idioma[];

  usuario!: Usuario;

  constructor(private usuarioService: UsuarioService, private idiomaService: IdiomaService) { }

  ngOnInit(): void {
    this.createForm();
    this.idiomaService.getIdiomas().subscribe(data => {
      this.idiomas = data;
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

  onSubmit(){
    this.usuario = this.formUsuario.value;
    this.usuarioService.salvaUsuario(this.usuario).subscribe(data =>{
      this.usuario = data;
    });
  }
}
