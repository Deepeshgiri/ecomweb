import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div class="list-group m-3">
          <Link
            to="/dashboard/user/createCategory"
            className="list-group-item list-group-item-action active"
          >
            Create Category
          </Link>
          <Link
            to="/dashboard/user/createProduct"
            className="list-group-item list-group-item-action "
          >
            Create Product
          </Link>
          <Link
            to="/dashboard/user/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </Link>
          <Link
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action">
            Profile
          </Link>
          <Link
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action ">
            Orders
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
