export interface ProdutoCreate {
  nome: string;
  descricao: string;
  preco: number;
  categoria_id: number;
  quantidade_inicial: number;
}

export interface ProdutoResponse {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade_estoque: number;
  categorias: CategoriaResponse[];
  imagens: ProdutoImagem[];
}

export interface ProdutoUpdate {
  nome?: string;
  descricao?: string;
  preco?: number;
  categoria_id?: number;
  quantidade_estoque?: number;
}

export interface ProdutoImagem {
  id: number;
  url_imagem: string;
  ordem: number;
}

export interface ProdutoResponse {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagens: ProdutoImagem[];
  categorias: CategoriaResponse[];
  quantidade_estoque: number;
}

export interface CategoriaResponse {
  id: number;
  nome: string;
}