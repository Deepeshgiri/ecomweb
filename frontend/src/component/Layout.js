import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';


function Layout({ children, description, keywords, author,title }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author}></meta>
        <title>{title}</title> </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
      <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.defaultProps={
  title:"shop now ecommerce app",
  description:"mern stack project",
  keywords:"react,nodejs,mongodb,express",
  author:"xyz person"

}

export default Layout;
