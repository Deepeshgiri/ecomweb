import React from 'react'
import Layout from './Layout'
import AdminMenu from '../pages/admin/AdminMenu'

export const Orders = () => {
  return (
    <Layout>
        <div className='row'>
            <div className='col-md-3'>
            <AdminMenu/>
            </div>
            <div className='col-md-9'>
               <h1>Orders</h1>
            </div>
        </div>
    </Layout>
  )
}
