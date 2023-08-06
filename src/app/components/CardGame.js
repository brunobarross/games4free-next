import React from "react";
import Button from "./Button";
import Link from "next/link";

const CardGame = (props) => {
  return (
    <div
      className="relative bg-white rounded-lg flex flex-col overflow-hidden"
      style={{ boxShadow: "0 2px 20px #0003" }}
    >
      <picture>
        <img className="w-full object-cover" srcSet={props.jogo.thumbnail} />
      </picture>
      <div className="px-4 py-6">
        <div className="flex items-center">
          <p className="text-neutral-950">
            {props.jogo.type} |{" "}
            {props.jogo.platforms.split(",")[0] && (
              <span
                className={`badge ml-2 ${props.jogo.platforms
                  .toLowerCase()
                  .split(",")[0]
                  .replace(/ /g, "-")
                  .replace("|", "-")}`}
              >
                {props.jogo.platforms.split(",")[0]}
              </span>
            )}
            {props.jogo.platforms.split(",")[1] && (
              <span
                className={`badge ml-2 ${props.jogo.platforms
                  .toLowerCase()
                  .split(",")[0]
                  .replace(/ /g, "-")
                  .replace("|", "-")}`}
              >
                {props.jogo.platforms.split(",")[1]}
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="valor">
            <p
              className=" text-sm font-medium "
              style={{ color: "rgb(39,70,144)" }}
            >
              Grátis{" "}
              <span className="line-through text-neutral-950">
                {props.jogo.worth}
              </span>
            </p>
          </div>
        </div>
        <h3 className="text-base mt-6 text-ellipsis font-semibold text-neutral-950">
          {props.jogo.title}
        </h3>
        <p className="description">{props.jogo.description}</p>
        <Link
          href={`/dashboard/${props.params.slug}/${props.jogo.id}`}
          className="text-primary-500 font-medium inline-flex mt-4 text-sm text-primary "
        >
          Detalhes
        </Link>
      </div>
      <div className="mt-auto px-4 pb-6 ">
        <a className="btn primary w-full uppercase" href={props.jogo.open_giveaway_url} target="_blank">Resgatar</a>
      </div>
    </div>
  );
};

export default CardGame;
