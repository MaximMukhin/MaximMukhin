import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import Navigation from "../Navigation";
import { StyledPage } from "./StyledPage";

export const Page = (props) => {
  const { children } = props;

  return (
    <StyledPage>
      <Header />
      <Navigation />
      <div style={{ padding: '8px' }}>Page{children}</div>
      <Footer />
    </StyledPage>
  );
};

// export default Page
