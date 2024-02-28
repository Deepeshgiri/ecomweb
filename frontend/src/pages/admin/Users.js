import React from 'react'
import Layout from '../../component/Layout'
import AdminMenu from './AdminMenu'

const Users = () => {
  return (
    <Layout>
      <div className='row'>
        <div className='col-md-3'>
          <AdminMenu/>
        </div>
        <div className='col-md-9'>
          Users
        </div>
      </div>
    </Layout>
  )
}

export default Users