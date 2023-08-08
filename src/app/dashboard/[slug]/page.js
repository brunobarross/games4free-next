import React from "react";
import CardGame from "../../components/CardGame";
import HeaderContent from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const page = async ({ params }) => {
  const res = await fetch(`${process.env.API_URL}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.API_KEY}`,
      "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
    },
  });

  const jogos = await res.json();

  const jogosFiltrados = await jogos.filter((jogo) => {
    const plataformas = [
      "Epic Games Store",
      "Steam",
      "GOG",
      "Playstation 4",
      "Xbox 360",
      "Xbox One",
      "Nintendo Switch",
      "Ubisoft",
      "Android",
    ];
    if (params.slug === "games") {
      return (
        jogo.type === "Game" &&
        plataformas.some((plataforma) => jogo.platforms.includes(plataforma))
      );
    } else if (
      params.slug === "dlcs" &&
      plataformas.some((plataforma) => jogo.platforms.includes(plataforma))
    ) {
      return jogo.type === "DLC";
    }
  });

  const quantidade = await jogosFiltrados.length;

  return (
    <>
      <Navbar />
      <div className="container mt-20  px-5 md:px-12 mb-12">
        <HeaderContent quantidade={quantidade} jogos={jogosFiltrados} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-16">
          {jogosFiltrados.map((jogo, index) => (
            <CardGame key={index} jogo={jogo} params={params} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
