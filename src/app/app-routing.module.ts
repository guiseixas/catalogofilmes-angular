import { CadastroIdiomaComponent } from './cadastro-idioma/cadastro-idioma.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { LoginComponent } from './login/login.component';
import { CardListComponent } from './card-list/card-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : '', component: CardListComponent},
  {path : 'login', component: LoginComponent},
  {path : 'cadastraFilme', component: CadastroFilmesComponent, canActivate:[AuthGuard]},
  {path : 'cadastraFilme/:id', component: CadastroFilmesComponent, canActivate:[AuthGuard]},
  {path : 'cadastraCategoria', component: CadastroCategoriaComponent, canActivate:[AuthGuard]},
  {path : 'cadastraCategoria/:id', component: CadastroCategoriaComponent, canActivate:[AuthGuard]},
  {path : 'cadastraUsuario', component: CadastroUsuarioComponent, canActivate:[AuthGuard]},
  {path : 'cadastraUsuario/:id', component: CadastroUsuarioComponent, canActivate:[AuthGuard]},
  {path : 'cadastraIdioma', component: CadastroIdiomaComponent, canActivate:[AuthGuard]},
  {path : 'cadastraIdioma/:id', component: CadastroIdiomaComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
