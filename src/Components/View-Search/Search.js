import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
//import { useEffect } from "react";

export const Search = ({ search, setSearch }) => {
  const handleSearchDomain = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <InputGroup className="mb-3" onChange={handleSearchDomain} value={search}>
        <FormControl
          placeholder="Busca tu dominio"
          aria-label="Busca tu Domonio"
          aria-describedby="basic-addon2"
        />

        <InputGroup.Text id="basic-addon2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className=" fa-2x" />
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};
