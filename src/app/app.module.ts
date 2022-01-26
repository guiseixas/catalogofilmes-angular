import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card-list/card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroIdiomaComponent } from './cadastro-idioma/cadastro-idioma.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    CardListComponent,
    LoginComponent,
    CadastroFilmesComponent,
    CadastroCategoriaComponent,
    CadastroUsuarioComponent,
    CadastroIdiomaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
