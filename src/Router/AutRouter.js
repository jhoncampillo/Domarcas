import React from "react";
import { PortafolioAdmin } from "../Components/PortafoliAdmin/PortafolioAdmin";

export const AutRouter = () => {
  return (
    <div>
      <Routes>
        <Route index element={}></Route>
        <Route path="potafolioAdmin" element={<PortafolioAdmin />}></Route>
      </Routes>
    </div>
  );
};
