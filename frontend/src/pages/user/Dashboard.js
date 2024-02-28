import React from "react";
import Layout from "./../../component/Layout";

import { useAuth } from "../../context/auth";
import AdminMenu from "../admin/AdminMenu";

const Dashboard = () => {
  const [auth,setAuth] = useAuth()
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
         <AdminMenu/>
        </div>
        <div className="col-md-9">
          <div className="card w-50 m-3 p-2" style={{boxShadow:"5px 5px 10px 3px gray"}}>
                <h5>User Name :{auth?.user?.name}</h5>
                <h5>User Email :{auth?.user?.email}</h5>
                <h5>User Phone :{auth?.user?.phone}</h5>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
