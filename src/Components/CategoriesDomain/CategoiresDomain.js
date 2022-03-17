import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
//import { alfabetic } from "../../data/data";

export const CategoiresDomain = ({ domainFilter }) => {
  const [dominios, setDominios] = useState(domainFilter);
  console.log("estos son los dominio", dominios);
  // const { name, extension, caracteres, precioVenta, renta, oferta, categoria } =
  //   dominios;
  return (
    <>
      <h2>Categories Domain</h2>
      <hr />

      <hr />
      <div className="d-flex p-2 flex-wrap p-2">
        {domainFilter.map(
          (
            {
              name,
              extension,
              caracteres,
              precioVenta,
              renta,
              oferta,
              categoria,
            },
            index
          ) => {
            return (
              <div key={index} className="card w-50  ">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">Extension : {extension}</p>
                  <p className="card-text">No.Caracteres : {caracteres}</p>
                  <p className="card-text">Precio de Venta : {precioVenta}</p>
                  <p className="card-text">Precio de Renta : {renta}</p>
                  <p className="card-text">Categoria : {categoria}</p>
                  <Button variant="dark  mx-2" size="sm">
                    Comprar
                  </Button>
                  <Button variant="dark  mx-2" size="sm">
                    Rentar
                  </Button>
                  <Button variant="dark  mx-2" size="sm">
                    Ofertar
                  </Button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};
