import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      }).catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#141414" }}>
      <PageDefault paddingAll={0}>
        {dadosIniciais.length === 0 && (<div>Loading...</div>)}

        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={""}
                />

                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }
          return(
            <Carousel
            key={categoria.cor}
            category={categoria}
          />
          )
        

        })}










      </PageDefault>
    </div>
  );
}

export default Home;
