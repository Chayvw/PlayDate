import React from "react";

const tokenContext = React.createContext({
  jwt: "",
  setJwt: () => {}
});

export default tokenContext;