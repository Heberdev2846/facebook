import React from "react";

const Navbarizq = () => {
  return (
    <div className="pt-24 pl-6 w-80 h-[650px] overflow-y-auto bg-zinc-900">
      <ul className="">
        <a href="">
          <li className="flex items-center ">
            <img className="rounded-full h-7 w-7" src="/img/Heber.jpg"></img>
            <p className="ml-4 text-sm">Heber Punk</p>
          </li>
        </a>
        <a href="">
          <li className="flex mt-4 items-center">
            <img src="/Emojis/Amigos.svg"></img>
            <p className="ml-4 text-sm">Amigos</p>
          </li>
        </a>
        <a href="">
          <li className="flex mt-4 items-center">
            <img src="/Emojis/Feed.svg"></img>
            <p className="ml-4 text-sm">Feeds</p>
          </li>
        </a>
        <a href="">
          <li className="flex mt-4 items-center">
            <img src="/Emojis/group.svg"></img>
            <p className="ml-4 text-sm">Grupos</p>
          </li>
        </a>
        <a href="">
          <li className="flex mt-4 items-center">
            <img src="/Emojis/shop.svg"></img>
            <p className="ml-4 text-sm">Marketplace</p>
          </li>
        </a>
        <a href="">
          <li className="flex mt-4 items-center">
            <img src="/Emojis/video.svg"></img>
            <p className="ml-4 text-sm">Video</p>
          </li>
        </a>
        <a href="">
          <li className="flex mt-4 items-center">
            <img src="/Emojis/memories.svg"></img>
            <p className="ml-4 text-sm">Recuerdos</p>
          </li>
        </a>
        <a href="">
          <li className="flex mt-4 items-center">
            <div className="p-2 rounded-full bg-zinc-700">
              <image>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo"
                  speechify-initial-font-family='"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif'
                  speechify-initial-font-size="12px"
                >
                  <g
                    fill-rule="evenodd"
                    transform="translate(-448 -544)"
                    speechify-initial-font-family='"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif'
                    speechify-initial-font-size="12px"
                  >
                    <path
                      fill-rule="nonzero"
                      d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                      speechify-initial-font-family='"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif'
                      speechify-initial-font-size="12px"
                    ></path>
                  </g>
                </svg>
              </image>
            </div>
            <p className="ml-3 text-sm">Ver más</p>
          </li>
        </a>
      </ul>
      <hr className="mt-4 "></hr>
      <p className="mt-3 text-gray-400">Tus accesos directos</p>
      <ul className="">
        <a href="">
          <li className="flex mt-4 items-center">
            <img className="rounded-full h-7 w-7" src="/img/Heber.jpg"></img>
            <p className="ml-4 text-sm">Heber Punk</p>
          </li>
        </a>
        <a href="">
          <li className="flex mt-4 items-center">
            <img
              src="/Emojis/elforrex.jpg"
              className="w-8 h-8 rounded-full"
            ></img>
            <p className="ml-3 text-sm">El forrex</p>
          </li>
        </a>
        <a href="">
          <li className="flex mt-4 items-center">
            <img src="/Emojis/best.jpg" className="w-8 h-8 rounded-lg"></img>
            <p className="ml-3 text-sm">Best Fiends</p>
          </li>
        </a>
        <a href="">
          <li className="flex mt-4 items-center">
            <img src="/Emojis/candy.jpg" className="w-8 h-8 rounded-lg"></img>
            <p className="ml-3 text-sm">Candy Crush Saga</p>
          </li>
        </a>
      </ul>
      <div className="mt-12">
        <p className="text-xs text-zinc-400">Privacidad · Condiciones · Publicidad ·</p>
        <p className="text-xs text-zinc-400">Opciones de anuncios · Cookies · Meta</p>
        <p className="text-xs text-zinc-400">© 2023</p>
      </div>
    </div>
  );
};

export default Navbarizq;
