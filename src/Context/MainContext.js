//Creo elcontexto Priincipal
import React from "react";
import { alfabetic } from "../data/data";
import { createContext } from "react";
import { useState, useEffect } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [dominios, setDominios] = useState(alfabetic);
  // console.log("estos son los dominio", dominios);
  //const = {(name, extension, caracteres, precioVenta, renta, oferta, categoria)} = dominios

  console.log("DOMINIOS DEL CONTEXT", dominios);
  let domainFilter = [];

  const [search, setSearch] = useState("");
  console.log(search.length);
  //estado para asignar datos

  if (!search.length >= 1) {
    domainFilter = dominios;
    console.log("jjjjjjjjjj", domainFilter);
  } else {
    domainFilter = dominios.filter((domain) => {
      const todotext = domain.name.toLowerCase();
      const searchDomtext = search.toLowerCase();
      return todotext.includes(searchDomtext);
    });
  }

  useEffect(() => {
    //console.log("jj useEffect", dominios);
    const sorted = domainFilter.sort((a, b) => (a.name > b.name ? 1 : -1));
    //console.log("jhon Alf ", sorted);
    //asigno array ordenado al state
    setDominios(sorted);
  }, []);
  //exporto la data modificada
  const data = { domainFilter, search, setSearch };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};
export { MainContext, MainContextProvider };
