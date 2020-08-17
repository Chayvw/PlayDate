import React, { useEffect, useContext, useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default ({ children }) => {
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol xs="12" sm="10" md="8" lg="6">
          {children}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
