import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import Navigation from "../Navigation";

export const Page = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <Navigation />
      <div style={{ padding: '8px' }}>Page{children}</div>
      <Footer />
    </div>
  );
};

// export default Page
