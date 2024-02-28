import React, { useEffect, useState } from "react";
import Layout from "../../component/Layout";
import AdminMenu from "./AdminMenu";
import { toast } from "react-hot-toast";
import { Table } from "reactstrap";
import axios from "axios";
// import { CategoryForm } from "../../component/form/CategoryForm";
import { Button, Modal } from 'antd';
import { CategoryForm } from "../../component/form/CategoryForm";

export const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected,setSelected] = useState(null)
  const [updatedName,setUpdatedName] =useState("")

  // handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/v1/category/create-category`,
        { name:name }
      
      );
      console.log(name);
      if (data?.success) {
        toast.success(`${name} is created`);
        setName("")
        getAllCategories()
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    }
  };

  // get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/category/get-category`
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong getting category");
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  //  delete categories
  const handleDelete = async (id)=>{
    console.log("hello");
    try {
      const {data} = await axios.delete(`http://localhost:8000/api/v1/category/delete-category/${id}`)
      if(data.success)
      {
        toast.success("Category deleted.")
        getAllCategories()
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong getting category");
    }

        
  }
  //  update category
  const handleUpdate=async (e)=>{
     e.preventDefault()
     try {
         const {data} = await axios.put(`http://localhost:8000/api/v1/category/update-category/${selected._id}`,{
            name:updatedName
          })
         
          if(data.success)
          {
              toast.success(`${updatedName} updated successfully.`)
              setSelected("")
              setUpdatedName("")
              setVisible(false)
              getAllCategories()
          }
          else{
            toast.error(data.message)
          }

     } catch (error) {
        console.log(error);
        toast.error("something went wrong")
     }
  }

  //  update function ends here
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h2>Manage Categories</h2>
          
          <div className="p-3">
            {/* <CategoryForm
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            /> */}

            {/* form start  */}
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter new category"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

            {/* form ends */}

          </div>
          <Table className="w-75">
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, i) => (
                <tr key={i}>
                  <td>{cat.name}</td>
                  <td>
                    <button className="btn btn-primary" onClick={()=>{setVisible(true) ;setUpdatedName(cat.name);setSelected(cat)}}>Edit</button>&nbsp;

                    <button className="btn btn-danger" onClick={()=>handleDelete(cat._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
                {/* //sir code */}
        {/* <Modal onCancel={()=>setVisible(false)} footer={null} visible={visible}>
          <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}/>
        </Modal> */}

        <Modal  footer={null} open={false}>
          <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}/>
        </Modal>
      </div>
    </Layout>
  );
};