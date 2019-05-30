import React from 'react';
import "./admin.css"
import { Link, Router } from '@reach/router';
// import AddNew from './AddNew';
// import Offer from './Offer';

const Admin = props => {
    return (
        <div>
            <div className="admin-dashboard">
                <Link to="/" className="add">Back Home</Link>
                <Link to="/addnew" className="add">Add New Product</Link>
                <Link to="/addoffer" className="add">Add Offer</Link>
            </div>
       </div>
    )
}



export default Admin;