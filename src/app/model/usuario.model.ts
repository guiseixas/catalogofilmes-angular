import { Idioma } from "./idioma.model";

export interface Usuario{
  id?: number;
  nome: String;
  cpf: String;
  telefone: String;
  email: String;
  senha: String;
  idioma: Idioma;

}
