''

import React from "react";
import Link from "next/link";

const Page = async ({ params }) => {
  const res = await fetch(
    `https://gamerpower.p.rapidapi.com/api/giveaway?id=${params.id}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "59df7faf5emsh2cb45c52d4b33e3p18956fjsn99432fdbfb5d",
        "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
      },
    }
  );
  const regex = /\d+/g;
  const jogo = await res.json()


  const textoAPI = jogo.instructions;
  const arrayStr = textoAPI.replace(/\r\n/, '<br>').split('<br>');


  return (
    <div className="container">
      <div
        className="flex flex-col max-w-[800px] overflow-hidden bg-white mx-auto  my-16  h-max rounded-lg"
        style={{ boxShadow: "0 2px 20px #0003" }}
      >
        <picture>
          <img className=" w-full h-full max-h-[300px]" srcSet={jogo.image} />
        </picture>
        <div className="px-6 py-8">
        <h3 className="text-2xl text-ellipsis font-semibold text-neutral-950">
            {jogo.title}
          </h3>
          <div className="flex items-center mt-4">
            <p className="text-neutral-950">
              {jogo.type} |{" "}
              {jogo.platforms.split(",")[0] && (
                <span
                  className={`badge ml-2 ${jogo.platforms
                    .toLowerCase()
                    .split(",")[0]
                    .replace(/ /g, "-")
                    .replace("|", "-")}`}
                >
                  {jogo.platforms.split(",")[0]}
                </span>
              )}
              {jogo.platforms.split(",")[1] && (
                <span
                  className={`badge ml-2 ${jogo.platforms
                    .toLowerCase()
                    .split(",")[0]
                    .replace(/ /g, "-")
                    .replace("|", "-")}`}
                >
                  {jogo.platforms.split(",")[1]}
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="valor">
              <p
                className=" text-base font-medium "
                style={{ color: "rgb(39,70,144)" }}
              >
                Grátis{" "}
                <span className="line-through text-neutral-950">
                  {jogo.worth}
                </span>
              </p>
            </div>
          </div>
      
          <p className="description !text-base">{jogo.description}</p>
          <div className="mt-8 text-neutral-950">
              <h3 className="font-semibold text-lg">Instructions</h3>
                <ul className="mt-4">
                    {arrayStr.map((item, index) => (
                        <li className="mt-2" key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        
        </div>
        <div className=" px-6 pb-8">
          <a
            className="btn primary !text-base  uppercase w-full md:w-[12.5rem] "
            href={jogo.open_giveaway_url}
            target="_blank"
          >
            Resgatar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
