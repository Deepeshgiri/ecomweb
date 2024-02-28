import React, { useState,useEffect} from 'react'
import Layout from '../../component/Layout'
import AdminMenu from './AdminMenu'
import { toast } from "react-hot-toast";
import axios from "axios";
import { Select } from 'antd';
const {Option} = Select;
export const CreateProduct = () => {
  const [category,setCategory] = useState("")
  const [categories,setCategories] =useState([])
  const [name,setName] = useState("")
  const [description,setDescription] =useState("")
  const [price,setPrice] = useState("")
  const [quantity,setQuantity] = useState("")
  const [shipping,setShipping] = useState("")
  

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

  return (
    <Layout>
      <div className='row'>
        <div className='col-md-3'>
          <AdminMenu/>
        </div>
        <div className='col-md-9'>
          <div className='m-1'>
            <Select bordered={false} placeholder="select category" size='large' showSearch className='form-control mb-3'
            onChange={(value)=>{setCategory(value)}}>
              {
                categories?.map((c)=>
                <option key={c._id} value={c.name}>
                  {c.name}
                </option>
                )
              }

            </Select>

          </div>
        </div>
      </div>
    </Layout>
  )
}