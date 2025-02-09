// import {React, useEffect, useState} from "react";
// import { getProdutos } from "../services/api";

// const Gallery = () => {

//     const [products, setProducts] = useState([]);

//     // useEffect(() => {
//     //   const handleProduct = async () => {
//     //     try {
//     //       const response = await getProdutos();
//     //       setProducts(response.data || []);
//     //       alert("Produtos carregados com sucesso");
//     //     } catch (error) {
//     //       console.error("Erro ao carregar produtos:", error);
//     //       alert("Erro ao carregar produtos");
//     //     }
//     //   };
  
//     //   handleProduct();
//     // }, []);

//     useEffect(() => {
//       fetch("http://localhost:8000/api/produtos") // URL da API
//         .then((res) => res.json()) // Converte a resposta para JSON
//         .then((data) => setProducts(data)) // Atualiza o estado com os dados recebidos
//         .catch((error) => console.error("Erro ao buscar produtos:", error));
//     }, []); // O array vazio garante que a requisição rode apenas uma vez

    
//     const items = [
//       {
//         src: "https://drive.google.com/file/d/1m9SRTSumXckU7HR6alhzpFcnxdolUUrY/preview",
//         caption: "Imagem 1: Esta é uma imagem armazenada no Google Drive.Preço: R$ 100,00",
//       },
//       {
//         src: "https://drive.google.com/file/d/1r5N11rkkCixxscb6QLI-C8bQmJLonbf3/preview",
//         caption: "Imagem 2: Outra imagem interessante do Google Drive.",
//       },
//       {
//         src: "https://drive.google.com/file/d/1m9SRTSumXckU7HR6alhzpFcnxdolUUrY/preview",
//         caption: "Imagem 1: Esta é uma imagem armazenada no Google Drive.",
//       },
//       {
//         src: "https://drive.google.com/file/d/1r5N11rkkCixxscb6QLI-C8bQmJLonbf3/preview",
//         caption: "Imagem 2: Outra imagem interessante do Google Drive.",
//       },
//       {
//         src: "https://drive.google.com/file/d/1m9SRTSumXckU7HR6alhzpFcnxdolUUrY/preview",
//         caption: "Imagem 1: Esta é uma imagem armazenada no Google Drive.",
//       },
//       {
//         src: "https://drive.google.com/file/d/1r5N11rkkCixxscb6QLI-C8bQmJLonbf3/preview",
//         caption: "Imagem 2: Outra imagem interessante do Google Drive.",
//       },
//       {
//         src: "https://drive.google.com/file/d/1m9SRTSumXckU7HR6alhzpFcnxdolUUrY/preview",
//         caption: "Imagem 1: Esta é uma imagem armazenada no Google Drive.",
//       },
//       {
//         src: "https://drive.google.com/file/d/1r5N11rkkCixxscb6QLI-C8bQmJLonbf3/preview",
//         caption: "Imagem 2: Outra imagem interessante do Google Drive.",
//       },

//     ];
  
//     return (
//       <div style={{ display: "flex",gap: "20px", marginLeft: "100px",marginRight: "100px", paddingBottom: "20px", paddingTop: "20px", marginBottom:"20px", flexWrap:"wrap", justifyContent: "center", backgroundColor: "rgba(156, 163, 185, 0.88)", borderRadius:"40px"}} >
//         <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.nome} - {product.preco}
//           </li>
//         ))}
//       </ul>
//         {/* {items.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               cursor: "pointer",
//               hover: "scale(1.1)",
//               gap: "15px",
//               background: "#f5f5f5",
//               padding: "10px",
//               maxWidth: "210px",
//               borderRadius: "10px",
//             }}
//           >
//             <iframe
//               src={item.src}
//               width="150"
//               height="150"
//               style={{
//                 borderRadius: "10px",
//                 boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//               }}
//               allow="autoplay"
//             ></iframe>
//             <p style={{ fontSize: "16px", color: "#333" }}>{item.caption}</p>
//           </div>
//         ))} */}
//       </div>
//     );
//   }


// export default Gallery;


import React, { useEffect, useState } from "react";
import { getProdutos } from "../services/api";

const Gallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleProduct = async () => {
      try {
        const response = await getProdutos();
        setProducts(response.data || []);
        alert("Produtos carregados com sucesso");
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        alert("Erro ao carregar produtos");
      }
    };

    handleProduct();
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", marginLeft: "100px", marginRight: "100px", paddingBottom: "20px", paddingTop: "20px", marginBottom:"20px", flexWrap:"wrap", justifyContent: "center", backgroundColor: "rgba(156, 163, 185, 0.88)", borderRadius:"40px"}} >
      {products.map((product, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            gap: "15px",
            background: "#f5f5f5",
            padding: "10px",
            maxWidth: "210px",
            borderRadius: "10px",
          }}
        >
          {product.imagens && product.imagens.length > 0 && (
            <iframe
              src={product.imagens[0].url_imagem}
              width="150"
              height="150"
              style={{
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              allow="autoplay"
            ></iframe>
          )}
          <p style={{ fontSize: "16px", color: "#333" }}>{product.nome}</p>
          <p style={{ fontSize: "14px", color: "#555" }}>{product.descricao}</p>
          <p style={{ fontSize: "14px", color: "#555" }}>Preço: R$ {product.preco}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;