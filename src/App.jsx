import React from "react";
import Header from "./components/header/Header";
import Planet from "./components/planet/Planet";
import './App.css'

const planets = [
  {
    id: 1,
    name: "Merkurius",
    image: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/08/16085935/image001-46-810x513.jpg",
    description: "Merkurius mempunyai ukuran yang kecil dengan diameter sekitar 4.879 km serta tidak mempunyai atmosfer, sehingga angkasa dalam planet ini terlihat gelap dan memiliki suhu yang ekstrim."
  },
  {
    id: 2,
    name: "Venus",
    image: "https://asset.kompas.com/crops/ofGMJCR4JF_8NLDJXdaOF9bDoSM=/0x56:1000x722/1200x800/data/photo/2020/09/16/5f61eb0d094db.jpg",
    description: "Planet Venus adalah planet terpanas di tata surya dan planet kedua yang paling dekat dengan Matahari setelah Merkurius."
  },
  {
    id: 3,
    name: "Bumi",
    image: "https://www.mongabay.co.id/wp-content/uploads/2020/04/Bumi_NASA.jpg",
    description: "Bumi adalah planet ketiga dari Matahari dalam tata surya. Ini adalah planet yang unik karena merupakan satu-satunya planet yang diketahui memiliki kehidupan."
  }
];

const App = () => {
  return (
    <>
      <Header/>
      <div className = 'container'>
        {planets.map((value, index) => (
          <Planet
            key={index}
            nama={value.name}
            src={value.image}
            desc={value.description}
          />
        ))}
      </div>
    </>
  );
};

export default App;