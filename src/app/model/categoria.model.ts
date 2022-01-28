import { Idioma } from "./idioma.model";
export interface Categoria{
  id?: number;
  nome: String;
  tag: String;
  idioma: Idioma;
}
