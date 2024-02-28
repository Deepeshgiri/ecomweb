import React from "react";
import Layout from "../component/Layout";
import { useAuth } from "../context/auth";

export const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      {<pre>{JSON.stringify(auth, null,4)}</pre>}
     
    </Layout>
  );
};
