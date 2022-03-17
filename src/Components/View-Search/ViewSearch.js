import React from "react";
import { Button } from "react-bootstrap";
// import { Search } from "./Search";
import { useState } from "react";
import { CategoiresDomain } from "../CategoriesDomain/CategoiresDomain";
import { AlfabeticDomain } from "../AlfabeticDomain/AlfabeticDomain";
//import { alfabetic } from "../../data/data";

export const ViewSearch = ({ domainFilter }) => {
  //console.log("JJ", dominios);
  const [view, setView] = useState(true);

  const handleView = () => {
    console.log("Cambio de Vistas ");
    setView(!view);
  };

  // useEffect(() => {
  //   //console.log("jj useEffect", dominios);
  //   const sorted = domainFilter.sort((a, b) => (a.name > b.name ? 1 : -1));
  //   console.log("jhon Alf ", sorted);
  //   setDominio(sorted);
  // }, []);

  return (
    <div>
      <h1>ViewSearch</h1>
      <div className="row">
        <div className="col text-center">
          <Button variant="dark  mx-2" size="lg" onClick={handleView}>
            Tarjeta/Lista
          </Button>
        </div>
        {view ? (
          <CategoiresDomain domainFilter={domainFilter} />
        ) : (
          <AlfabeticDomain domainFilter={domainFilter} />
        )}
      </div>
    </div>
  );
};
