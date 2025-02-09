export default function Gallery() {
    const items = [
      {
        src: "https://drive.google.com/file/d/1m9SRTSumXckU7HR6alhzpFcnxdolUUrY/preview",
        caption: "Imagem 1: Esta é uma imagem armazenada no Google Drive.Preço: R$ 100,00",
      },
      {
        src: "https://drive.google.com/file/d/1r5N11rkkCixxscb6QLI-C8bQmJLonbf3/preview",
        caption: "Imagem 2: Outra imagem interessante do Google Drive.",
      },
      {
        src: "https://drive.google.com/file/d/1m9SRTSumXckU7HR6alhzpFcnxdolUUrY/preview",
        caption: "Imagem 1: Esta é uma imagem armazenada no Google Drive.",
      },
      {
        src: "https://drive.google.com/file/d/1r5N11rkkCixxscb6QLI-C8bQmJLonbf3/preview",
        caption: "Imagem 2: Outra imagem interessante do Google Drive.",
      },
      {
        src: "https://drive.google.com/file/d/1m9SRTSumXckU7HR6alhzpFcnxdolUUrY/preview",
        caption: "Imagem 1: Esta é uma imagem armazenada no Google Drive.",
      },
      {
        src: "https://drive.google.com/file/d/1r5N11rkkCixxscb6QLI-C8bQmJLonbf3/preview",
        caption: "Imagem 2: Outra imagem interessante do Google Drive.",
      },
      {
        src: "https://drive.google.com/file/d/1m9SRTSumXckU7HR6alhzpFcnxdolUUrY/preview",
        caption: "Imagem 1: Esta é uma imagem armazenada no Google Drive.",
      },
      {
        src: "https://drive.google.com/file/d/1r5N11rkkCixxscb6QLI-C8bQmJLonbf3/preview",
        caption: "Imagem 2: Outra imagem interessante do Google Drive.",
      },

    ];
  
    return (
      <div style={{ display: "flex",gap: "20px", marginLeft: "100px",marginRight: "100px", paddingBottom: "20px", paddingTop: "20px", marginBottom:"20px", flexWrap:"wrap", justifyContent: "center", backgroundColor: "rgba(156, 163, 185, 0.88)", borderRadius:"40px"}} >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
                flexDirection: "column",
                alignItems: "center",
              cursor: "pointer",
              hover: "scale(1.1)",
              gap: "15px",
              background: "#f5f5f5",
              padding: "10px",
              maxWidth: "210px",
              borderRadius: "10px",
            }}
          >
            <iframe
              src={item.src}
              width="150"
              height="150"
              style={{
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              allow="autoplay"
            ></iframe>
            <p style={{ fontSize: "16px", color: "#333" }}>{item.caption}</p>
          </div>
        ))}
      </div>
    );
  }
  