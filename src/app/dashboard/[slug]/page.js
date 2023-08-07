import React from "react";
import CardGame from "../../components/CardGame";
import HeaderContent from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";

const page = async ({params}) => {

  const res = await fetch(`https://gamerpower.p.rapidapi.com/api/giveaways`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "59df7faf5emsh2cb45c52d4b33e3p18956fjsn99432fdbfb5d",
      "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
    },
  });


  const jogos = await res.json();


  const jogosFiltrados = await  jogos.filter((jogo) => {
    if(params.slug === 'games') {
      return jogo.type === 'Game'
    } else if(params.slug === 'dlcs') {
      return jogo.type === 'DLC'
    } 
  });


  const quantidade = await jogosFiltrados.length; 
  return (
    <div className="container md:mt-16 mt-32 px-12">
      <Navbar />
      <HeaderContent quantidade={quantidade} jogos={jogosFiltrados} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-16">
        {jogosFiltrados.map((jogo, index) => (
          <CardGame key={index} jogo={jogo} params={params} />
        ))}
      </div>
    </div>
  );
};

export default page;
