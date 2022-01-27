import { Categoria } from "./categoria.model";
import { Idioma } from "./idioma.model";

export interface Filme {
  id?: number;
  titulo: String;
  sinopse: String;
  imagem: String;
  dataLancamento: String;
  duracao: String;
  idioma: Idioma;
  categoria: Categoria;

}
