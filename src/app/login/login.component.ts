import { AutenticacaoService } from './../services/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;
  email = '';
  senha = '';

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void { }

  login(){
    this.authService.autenticar(this.email, this.senha).subscribe({
      next: (data) => {
        let token = data.tipo + " " + data.token;
        localStorage.setItem("token", token);
        this.router.navigate(["/"]);
      },
      error: (error) => {console.log(error)}
    });
  }

  resetar(){
    this.email = '';
    this.senha = '';
  }
}
