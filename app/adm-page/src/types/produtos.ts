export interface ProdutoResponse {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade_estoque: number; 
  imagens: string[]; 
  categorias: { categoria_id: number, nome: string }[];
}

  
export interface ProdutoCreate {
    id?: number;
    nome: string;
    descricao: string;
    preco: number;
    categorias: { produto_id?: number; categoria_id: number }[];
}
  